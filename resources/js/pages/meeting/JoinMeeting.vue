<script lang="ts" setup>
import { router, usePage } from '@inertiajs/vue3';
import { ref, watchEffect } from 'vue';
import Alert from '@/components/ui/alert/Alert.vue';
import AlertDescription from '@/components/ui/alert/AlertDescription.vue';
import Button from '@/components/ui/button/Button.vue';
import { Spinner } from '@/components/ui/spinner';
import HomeLayout from '@/layouts/HomeLayout.vue';

const camera = ref<HTMLVideoElement | null>(null);
const page = usePage().props;
const errorMessage = ref<string | null>(null);
const videoEnabled = ref(false);
const audioEnabled = ref(false);
const stream = ref<MediaStream | null>(null);
const processing = ref<boolean>(false);

const handleCameraError = (err: any) => {
    if (err.name === 'NotAllowedError') {
        errorMessage.value = 'Camera access denied. Please allow camera permissions.';
    } else if (err.name === 'NotFoundError') {
        errorMessage.value = 'No camera found on this device.';
    } else if (err.name === 'NotReadableError') {
        errorMessage.value = 'Camera is already in use by another application.';
    } else {
        errorMessage.value = `Camera error: ${err.message}`;
    }
};

const getMediaStream = async (constraints: MediaStreamConstraints) => {
    try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        return mediaStream;
    } catch (err: any) {
        handleCameraError(err);
        throw err;
    }
};

watchEffect(() => {
    if (camera.value && stream.value) {
        camera.value.srcObject = stream.value;
        errorMessage.value = null;
    }
});

const updateMediaStream = async () => {
    try {
        if (stream.value) {
            stream.value.getTracks().forEach(track => track.stop());
            stream.value = null;
        }

        if (videoEnabled.value || audioEnabled.value) {
            const constraints: MediaStreamConstraints = {
                video: videoEnabled.value,
                audio: audioEnabled.value
            };
            stream.value = await getMediaStream(constraints);
        }

        errorMessage.value = null;
    } catch (err: any) {
        handleCameraError(err);
        videoEnabled.value = false;
        audioEnabled.value = false;
        stream.value = null;
    }
};

const toggleCamera = async () => {
    videoEnabled.value = !videoEnabled.value;
    if (videoEnabled.value) {
        audioEnabled.value = true;
    }
    await updateMediaStream();
};

const toggleAudio = async () => {
    audioEnabled.value = !audioEnabled.value;
    await updateMediaStream();
};

const joinMeeting = () => {
    processing.value = true;
    setTimeout(() => {
        processing.value = false;
        router.visit('/meeting-room');
    }, 2000);
};


</script>

<template>
    <HomeLayout :display-footer="false">
        <template v-if="errorMessage">
            <Alert class="w-fit mx-auto font-medium mt-10" variant="destructive">
                <AlertDescription>
                    {{ errorMessage }}
                </AlertDescription>
            </Alert>
        </template>

        <div class="flex justify-evenly items-center mt-10 p-10">
            <div class="flex flex-col items-center justify-center space-y-8">
                <div class="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden min-h-[450px]">
                    <div v-if="page.auth.user"
                         class="absolute top-4 left-4 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium z-10">
                        Logged in as
                        <span class="bg-white/15 text-white font-semibold p-2 rounded-lg hover:bg-white/10">
                            {{ page.auth.user.name }}
                        </span>
                    </div>

                    <Button class="absolute top-4 right-4 bg-white/15 text-white z-10 p-2 rounded-lg hover:bg-white/10">
                        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                    </Button>

                    <div v-if="!stream || !videoEnabled"
                         class="absolute inset-0 flex items-center justify-center text-white/60">
                        <div class="text-center">
                            <div
                                class="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ion-icon class="text-5xl text-white/80" name="person-outline"></ion-icon>
                            </div>
                            <p class="text-sm">{{ !stream ? 'Camera is off' : 'Video disabled' }}</p>
                        </div>
                    </div>

                    <video ref="camera" :class="{ 'invisible': !stream || !videoEnabled }" autoplay
                           class="w-full h-full object-cover mirror"
                           playsinline>
                    </video>

                    <div
                        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                        <Button
                            class="text-white p-3 w-12 h-12 text-center text-xl rounded-full bg-gray-800/60 hover:bg-gray-700/80 transition-all duration-200 backdrop-blur-sm">
                            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                        </Button>

                        <Button
                            :class="audioEnabled ? 'bg-green-500/80 hover:bg-green-600/80' : 'bg-red-500 hover:bg-red-700/80'"
                            class="text-white p-3 w-12 h-12 text-center text-xl rounded-full transition-all duration-200 backdrop-blur-sm"
                            @click="toggleAudio">
                            <ion-icon :name="audioEnabled ? 'mic-outline' : 'mic-off-outline'"></ion-icon>
                        </Button>

                        <Button
                            :class="videoEnabled ? 'bg-green-500/80 hover:bg-green-600/80' : 'bg-red-500 hover:bg-red-700/80'"
                            class="text-white p-3 w-12 h-12 text-center text-xl rounded-full transition-all duration-200 backdrop-blur-sm"
                            @click="toggleCamera">
                            <ion-icon :name="videoEnabled ? 'videocam-outline' : 'videocam-off-outline'"></ion-icon>
                        </Button>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center">
                <div class="text-center space-y-2">
                    <h1 class="text-4xl font-semibold text-gray-900">Ready to join?</h1>
                    <p class="text-gray-500 text-sm">No one else is here</p>
                </div>

                <Button
                    :disabled="processing"
                    class="rounded-xl flex items-center w-[15rem] mt-10 py-6 px-16 text-lg  bg-[#FF4D3C] hover:bg-[#ff4c3cd8] text-white transition-colors"
                    type="button"
                    @click="joinMeeting">
                    <Spinner v-if="processing" class="mr-2" />
                    Join now
                </Button>
            </div>
        </div>
    </HomeLayout>
</template>
<style scoped>
.mirror {
    transform: scaleX(-1);
}
</style>
