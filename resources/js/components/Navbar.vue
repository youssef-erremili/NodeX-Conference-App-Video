<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3';
import { dashboard, login, register } from '@/routes';
import AppLogo from './AppLogo.vue';

const page = usePage();

withDefaults(
    defineProps<{
        canRegister: boolean;
    }>(),
    {
        canRegister: true,
    },
);

</script>

<template>
    <div class="py-8 px-12 flex items-center w-full shadow-lg shadow-gray-100">
        <!-- Logo -->
        <AppLogo />

        <!-- Center Navigation Links -->
        <nav class="flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/"
                class="cursor-pointer text-gray-600 hover:text-[#FF4D3C] font-medium transition-colors duration-300">
                Home
            </Link>
            <Link href="/join-meeting"
                class="cursor-pointer text-gray-600 hover:text-[#FF4D3C] font-medium transition-colors duration-300">
                Join
            </Link>
            <Link href="/create-room"
                class="cursor-pointer text-gray-600 hover:text-[#FF4D3C] font-medium transition-colors duration-300">
                Start Meeting
            </Link>
        </nav>

        <!-- Auth Buttons -->
        <div class="flex items-center gap-3 flex-1 justify-end">
            <Link v-if="page.props.auth.user" :href="dashboard()"
                class="px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-none">
                {{ page.props.auth.user.name }} Profile
            </Link>
            <template v-else>
                <Link :href="login()"
                    class="px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-none">
                    Login
                </Link>
                <Link v-if="canRegister" :href="register()"
                    class="px-6 py-2.5 bg-[#FF4D3C] text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-none">
                    Sign Up
                </Link>
            </template>
        </div>
    </div>
</template>