<script lang="ts" setup>
import GrayLayer from '@/components/GrayLayer.vue';
import Button from '@/components/ui/button/Button.vue';
</script>

<template>
    <div class="flex h-screen w-full gap-4 p-4">
        <div class="flex flex-col flex-1 gap-4">
            <div class="rounded-2xl h-full overflow-hidden">
                <img alt="Sample Image"
                     class="w-full h-full aspect-ratio object-cover"
                     height="100%"
                     src="/images/sample-image.jpg"
                     width="100%"
                >
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
                    <span
                        class="absolute top-3 right-3 z-10 flex items-center justify-center size-8 bg-red-500 text-white rounded-full">
                        <ion-icon name="mic-off-outline"></ion-icon>
                    </span>
                    <p class="absolute left-4 bottom-3 z-10 text-white capitalize">mic tomso</p>
                </div>
                <div class="relative bg-gray-800 rounded-2xl flex-1 overflow-hidden">
                    <img alt="Sample Image"
                         class="w-full h-full aspect-ratio object-cover"
                         height="100%"
                         src="/images/sample-image.jpg"
                         width="100%"
                    >
                    <GrayLayer />
                    <span
                        class="absolute top-3 right-3 z-10 flex items-center justify-center size-8 bg-red-500 text-white rounded-full">
                        <ion-icon name="mic-off-outline"></ion-icon>
                    </span>
                    <p class="absolute left-4 bottom-3 z-10 text-white capitalize">mic tomso</p>
                </div>
                <div class="relative bg-gray-800 rounded-2xl flex-1 overflow-hidden">
                    <img alt="Sample Image"
                         class="w-full h-full aspect-ratio object-cover"
                         height="100%"
                         src="/images/sample-image.jpg"
                         width="100%"
                    >
                    <GrayLayer />
                    <span
                        class="absolute top-3 right-3 z-10 flex items-center justify-center size-8 bg-green-500 text-white rounded-full">
                        <ion-icon name="mic-outline"></ion-icon>
                    </span>
                    <p class="absolute left-4 bottom-3 z-10 text-white capitalize">mic tomso</p>
                </div>
            </div>
            <div class="h-32 flex justify-center items-center">
                <Button
                    class="px-10 py-8 text-xl text-gray-900 bg-white border border-gray-300 rounded-2xl hover:text-white">
                    <ion-icon name="volume-high-outline"></ion-icon>
                </Button>
                <div class="mx-20">
                    <Button
                        class="px-10 py-8 mr-2 text-xl text-gray-900 bg-white border border-gray-300 rounded-2xl hover:text-white">
                        <ion-icon name="mic-outline"></ion-icon>
                    </Button>
                    <Button
                        class="px-10 py-8 text-xl text-gray-900 bg-white border border-gray-300 rounded-2xl hover:text-white">
                        <ion-icon name="videocam-outline"></ion-icon>
                    </Button>
                </div>
                <Button
                    class="px-12 py-8 text-white bg-red-500 border border-gray-300 rounded-2xl hover:text-white">
                    End Call
                </Button>
            </div>
        </div>

        <div class="bg-gray-900 rounded-lg w-80"></div>
    </div>
</template>
