<script lang="ts" setup>
import GrayLayer from '@/components/GrayLayer.vue';
import Microphone from '@/components/Microphone.vue';
import Button from '@/components/ui/button/Button.vue';
import Label from '@/components/ui/label/Label.vue';
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

        <div class="bg-gray-900 rounded-lg w-80"></div>
    </div>
</template>
