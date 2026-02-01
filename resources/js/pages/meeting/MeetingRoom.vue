<script lang="ts" setup>
import { ref } from 'vue';
import GrayLayer from '@/components/GrayLayer.vue';
import Microphone from '@/components/Microphone.vue';
import Button from '@/components/ui/button/Button.vue';
import Label from '@/components/ui/label/Label.vue';

const participants = ref([
    {
        name: 'Anne Hathaway',
        role: 'Host',
        image: 'https://i.pravatar.cc/150?u=anne',
        isHost: true
    },
    {
        name: 'Robert Pattinson',
        role: '',
        image: 'https://i.pravatar.cc/150?u=robert',
        isHost: false
    },
    {
        name: 'Natalie Portman',
        role: '',
        image: 'https://i.pravatar.cc/150?u=natalie',
        isHost: false
    },
    {
        name: 'Anne Hathaway',
        role: 'Host',
        image: 'https://i.pravatar.cc/150?u=anne',
        isHost: true
    },
    {
        name: 'Robert Pattinson',
        role: '',
        image: 'https://i.pravatar.cc/150?u=robert',
        isHost: false
    },
    {
        name: 'Natalie Portman',
        role: '',
        image: 'https://i.pravatar.cc/150?u=natalie',
        isHost: false
    },
    {
        name: 'Anne Hathaway',
        role: 'Host',
        image: 'https://i.pravatar.cc/150?u=anne',
        isHost: true
    },
    {
        name: 'Robert Pattinson',
        role: '',
        image: 'https://i.pravatar.cc/150?u=robert',
        isHost: false
    },
    {
        name: 'Natalie Portman',
        role: '',
        image: 'https://i.pravatar.cc/150?u=natalie',
        isHost: false
    }
]);

</script>

<template>
    <div class="flex h-screen w-full gap-4 p-4">
        <div class="flex flex-col flex-1 gap-4">
            <div class="relative rounded-2xl h-full overflow-hidden">
                <img alt="Sample Image"
                     class="w-full h-full aspect-ratio object-cover"
                     height="100%"
                     src="/images/sample-image.jpg"
                     width="100%"
                >
                <GrayLayer />
                <Label class="absolute left-4 bottom-3 z-10 text-white capitalize">You</Label>
            </div>
            <div class="flex gap-6 h-44">
                <div class="relative bg-gray-800 rounded-2xl flex-1 overflow-hidden">
                    <img alt="Sample Image"
                         class="w-full h-full aspect-ratio object-cover"
                         height="100%"
                         src="/images/sample-image.jpg"
                         width="100%"
                    >
                    <GrayLayer />
                    <Microphone :is-microphone-o-n="false" />
                    <Label class="absolute left-4 bottom-3 z-10 text-white capitalize">Youssef Erremili</Label>
                </div>
                <div class="relative bg-gray-800 rounded-2xl flex-1 overflow-hidden">
                    <img alt="Sample Image"
                         class="w-full h-full aspect-ratio object-cover"
                         height="100%"
                         src="/images/sample-image.jpg"
                         width="100%"
                    >
                    <GrayLayer />
                    <Microphone :is-microphone-o-n="true" />
                    <Label class="absolute left-4 bottom-3 z-10 text-white capitalize">Youssef Erremili</Label>
                </div>
                <div class="relative rounded-2xl flex-1 overflow-hidden">
                    <img alt="Sample Image"
                         class="w-full h-full aspect-ratio object-cover"
                         height="100%"
                         src="/images/sample-image.jpg"
                         width="100%"
                    >

                    <GrayLayer />
                    <Microphone :is-microphone-o-n="true" />
                    <Label class="absolute left-4 bottom-3 z-10 text-white capitalize">Youssef Erremili</Label>
                </div>
            </div>
            <div class="h-32 flex justify-center items-center">
                <Button
                    class="px-10 py-8 text-xl text-gray-900 bg-white border border-gray-300 rounded-2xl hover:bg-indigo-100 hover:text-indigo-700">
                    <ion-icon name="volume-high-outline"></ion-icon>
                </Button>
                <div class="mx-20">
                    <Button
                        class="px-10 py-8 mr-2 text-xl text-gray-900 bg-white border border-gray-300 rounded-2xl hover:bg-indigo-100 hover:text-indigo-700">
                        <ion-icon name="mic-outline"></ion-icon>
                    </Button>
                    <Button
                        class="px-10 py-8 text-xl text-gray-900 bg-white border border-gray-300 rounded-2xl hover:bg-indigo-100 hover:text-indigo-700">
                        <ion-icon name="videocam-outline"></ion-icon>
                    </Button>
                </div>
                <Button
                    class="px-12 py-8 text-white bg-red-500 border border-gray-300 rounded-2xl hover:bg-red-600 hover:text-white">
                    End Call
                </Button>
            </div>
        </div>

        <div class="w-80 p-2">
            <div
                class="participants rounded-xl bg-white shadow-xl shadow-gray-200/50 overflow-hidden">
                <div class="bg-blue-400/10 rounded-2xl py-5 sticky top-0 z-20">
                    <Label class="capitalize font-bold ml-4 text-blue-700">participants (5)</Label>
                </div>
                <div class="max-h-[200px] overflow-y-auto pb-5 custom-scroll">
                    <div v-for="participant in participants" :key="participant.name"
                         class="flex items-center gap-2 mt-1 p-2">
                        <img :alt="participant.name"
                             :class="participant.isHost && 'outline-3 outline-[#FF4D3C]'"
                             :src="participant.image"
                             class="size-9 ml-3 rounded-full border-2 border-white">
                        <Label class="text-slate-900 text-sm">
                            {{ participant.name }}
                            {{ participant.isHost && '(Host)' }}
                        </Label>
                    </div>
                </div>
            </div>
            <div class="chat"></div>
        </div>
    </div>
</template>

<style scoped>
.custom-scroll::-webkit-scrollbar {
    width: 6px;
}

.custom-scroll::-webkit-scrollbar-button {
    display: none;
}

.custom-scroll::-webkit-scrollbar-track {
    background-color: rgba(255, 77, 60, 0.18);
}

.custom-scroll::-webkit-scrollbar-thumb {
    background-color: #FF4D3C;
    border-radius: 10px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
    background-color: #e04435;
}
</style>
