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
        <div class="flex flex-col w-full lg:w-[45%]">
            <div class="relative h-screen py-2 w-full lg:px-16">
                <img
                    alt="Modern Architecture"
                    class="w-full h-full rounded-md object-cover"
                    src="/images/woman-wallpaper.webp"
                />

                <div class="absolute inset-0 bg-black/10 rounded-md pointer-events-none lg:mx-16 my-2"></div>

                <div
                    class="absolute left-[5rem] bottom-10 z-20 w-[25rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-between p-6 rounded-2xl">
                    <div>
                        <p class="text-lg font-semibold text-white tracking-wide">Youssef Erremili</p>
                        <p class="text-sm text-white/80 font-medium">Founder</p>
                        <p class="text-xs text-white/50 mt-1 uppercase tracking-tighter">Global Real
                            <Estate></Estate>
                            Investment Firm
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
