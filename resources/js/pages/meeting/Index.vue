<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { useUserMedia } from '@vueuse/core';
import { ref, watchEffect } from 'vue';
import Alert from '@/components/ui/alert/Alert.vue';
import AlertDescription from '@/components/ui/alert/AlertDescription.vue';
import Button from '@/components/ui/button/Button.vue';
import HomeLayout from '@/layouts/HomeLayout.vue';

const camera = ref<HTMLVideoElement | null>(null);
const page = usePage();
const errorMessage = ref<string | null>(null);

const { stream, start, stop, enabled } = useUserMedia({
    constraints: { video: true }
});

const handleCameraError = (err: any) => {
    console.error('Camera error:', err);

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

// Automatically update the video element when the stream changes
watchEffect(() => {
    if (camera.value && stream.value) {
        camera.value.srcObject = stream.value;
        errorMessage.value = null; // Clear error when stream is available
    }
});

const toggleCamera = async () => {
    try {
        if (!enabled.value) {
            await start();
            errorMessage.value = null;
        } else {
            stop();
        }
    } catch (err: any) {
        handleCameraError(err);
    }
};
</script>

<template>
    <HomeLayout :display-footer="false">
        <template v-if="errorMessage">
            <Alert variant="destructive" class="w-fit mx-auto font-medium mt-10">
                <AlertDescription>
                    {{ errorMessage }}
                </AlertDescription>
            </Alert>
        </template>

        <div class="flex justify-evenly items-center mt-10 p-10">
            <div class="flex flex-col items-center justify-center space-y-8">
                <div class="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden min-h-[450px]">
                    <div
                        class="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium z-10">
                        {{ page.props.auth.user.name }}
                    </div>

                    <Button class="absolute top-4 right-4 text-white z-10 p-2 rounded-lg hover:bg-white/10">
                        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                    </Button>

                    <!-- Placeholder when no stream -->
                    <div v-if="!stream" class="absolute inset-0 flex items-center justify-center text-white/60">
                        <div class="text-center">
                            <ion-icon name="videocam-off-outline" class="text-6xl mb-4"></ion-icon>
                            <p class="text-sm">Camera is off</p>
                        </div>
                    </div>

                    <video ref="camera" autoplay playsinline class="w-full h-full object-cover mirror"
                        :class="{ 'invisible': !stream }">
                    </video>

                    <div
                        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                        <Button
                            class="text-white p-3 w-12 h-12 text-center text-xl rounded-full bg-gray-800/60 hover:bg-gray-700/80 transition-all duration-200 backdrop-blur-sm">
                            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                        </Button>

                        <Button
                            class="text-white p-3 w-12 h-12 text-center text-xl rounded-full bg-gray-800/60 hover:bg-gray-700/80 transition-all duration-200 backdrop-blur-sm">
                            <ion-icon name="mic-outline"></ion-icon>
                        </Button>

                        <Button @click="toggleCamera"
                            class="text-white p-3 w-12 h-12 text-center text-xl rounded-full bg-gray-800/60 hover:bg-gray-700/80 transition-all duration-200 backdrop-blur-sm">
                            <ion-icon :name="enabled ? 'videocam-outline' : 'videocam-off-outline'"></ion-icon>
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
                    class="rounded-xl mt-10 py-6 px-16 text-lg  bg-[#FF4D3C] hover:bg-[#ff4c3cd8] text-white transition-colors">
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