<script lang="ts" setup>
import AppLogo from '@/components/AppLogo.vue';

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <div class="flex justify-evenly min-h-screen bg-[#fff]">
        <!-- Left Side - Form -->
        <div class="flex w-full flex-col lg:w-[45%]">
            <div class="flex min-h-screen flex-col">
                <!-- Logo -->
                <div class="px-8 py-6 lg:px-12">
                    <AppLogo />
                </div>

                <!-- Form Content -->
                <div class="flex flex-1 items-center justify-center px-8 py-12 lg:px-16">
                    <div class="w-full max-w-md">
                        <slot />
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Side -->
        <div class="flex flex-col w-full lg:w-[50%]">
            <div class="relative lg:h-screen w-full py-2">

                <div class="relative h-full max-w-3/4 mx-auto overflow-hidden rounded-xl shadow-2xl">
                    <img
                        alt="Modern Architecture"
                        class="w-full h-full object-cover"
                        src="/images/woman-wallpaper.webp"
                    />

                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                    <div
                        class="absolute bottom-8 left-6 right-6 md:left-10 md:right-10 z-20 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-8 rounded-[1.5rem]">
                        <div class="max-w-md">
                            <span class="text-white/40 text-4xl serif absolute top-4 left-6">“</span>

                            <p class="text-white/90 text-sm md:text-base leading-relaxed mb-6">
                                "With <b class="text-white font-bold tracking-tight">NodeX</b>, high-stakes meetings
                                feel like they're happening in the same room."
                            </p>

                            <div class="flex flex-col border-t border-white/10 pt-4">
                                <p class="text-lg font-bold text-[#FF4D3C] tracking-tight">Youssef Erremili</p>
                                <div class="flex items-center gap-2 mt-1">
                                    <p class="text-xs font-semibold text-white/50 uppercase tracking-widest">
                                        Founder</p>
                                    <span class="w-1 h-1 rounded-full bg-white/30"></span>
                                    <p class="text-[10px] text-white/50 uppercase tracking-wider">
                                        Next-Gen Communication Infrastructure
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
