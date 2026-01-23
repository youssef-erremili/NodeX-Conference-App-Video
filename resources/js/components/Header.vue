<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';
import Button from './ui/button/Button.vue';
import Card from './ui/card/Card.vue';
import CardDescription from './ui/card/CardDescription.vue';
import CardHeader from './ui/card/CardHeader.vue';
import Spinner from './ui/spinner/Spinner.vue';

const FeaturesCard = [
    {
        title: 'Enterprise Security',
        description: 'End-to-end encryption for all your meetings',
        icon: 'finger-print-outline',
        class: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
        title: 'HD Video Quality',
        description: 'Crystal clear video up to 1080p resolution',
        icon: 'videocam-outline',
        class: 'bg-gradient-to-br from-orange-400 to-orange-600',
    },
    {
        title: 'Up to 500 Participants',
        description: 'Host large meetings and webinars effortlessly',
        icon: 'people-outline',
        class: 'bg-gradient-to-br from-green-400 to-green-600',
    }
]

const errorMessage = ref<string | null | boolean>(null);
const meetingCode = ref<string>('');
const isLoading = ref<boolean>(false);


const CheckMeetingCode = () => {
    isLoading.value = true;

    if (!meetingCode.value || meetingCode.value.trim() === '') {
        errorMessage.value = 'Please enter a valid meeting code or link.';
        isLoading.value = false;
        return;
    }

    setTimeout(() => {
        isLoading.value = false;
        errorMessage.value = null;
        router.visit('/join-meeting');
        console.log('Checking meeting code...', meetingCode.value);
    }, 1000);

}

</script>

<template>
    <header
        class="bg-white min-h-screen flex items-center px-8 py-16 my-12 border border-gray-200 rounded-3xl w-[95%] mx-auto">
        <div class="max-w-7xl w-full mx-auto">
            <!-- Header Content -->
            <div class="text-center mb-16">
                <div class="inline-block bg-red-50 text-[#FF4D3C] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    Professional Video Conferencing Platform
                </div>

                <h1 class="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                    Connect Your Team<br />
                    <span class="text-[#FF4D3C]">Anywhere, Anytime</span>
                </h1>

                <p class="text-gray-600 text-xl md:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed">
                    Experience seamless video meetings with crystal-clear quality, robust security, and powerful
                    collaboration tools designed for modern teams.
                </p>

                <p class="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
                    Join millions of professionals who trust our platform for their daily meetings, webinars, and remote
                    collaboration. No downloads required, works on any device.
                </p>

                <!-- Join Meeting Input -->
                <div class="max-w-xl mx-auto mb-8">
                    <div
                        class="flex items-center gap-2 pl-6 bg-gray-50 rounded-2xl shadow-lg p-3 border-2 border-gray-100 hover:border-[#FF4D3C] transition-colors duration-300">
                        <ion-icon size="large" name="videocam-outline"></ion-icon>
                        <input v-model="meetingCode" type="text" placeholder="Enter meeting code or link to join..."
                            class="flex-1 px-4 py-4 outline-none text-gray-700 bg-transparent text-lg" />
                        <Button @click="CheckMeetingCode" as="button"
                            class="bg-[#FF4D3C] text-lg flex items-center justify-center gap-2 px-8 py-7 w-40 rounded-2xl">
                            <span>Join Now</span>
                            <div class="flex items-center justify-center">
                                <Spinner v-if="isLoading" class="w-5 h-5" />
                                <ion-icon v-else name="arrow-forward-outline"></ion-icon>
                            </div>
                        </Button>
                    </div>

                    <template v-if="errorMessage">
                        <p class="block text-red-500 mt-2">{{ errorMessage }}</p>
                    </template>
                </div>

                <!-- Trusted Users -->
                <div class="flex flex-col items-center gap-4 mb-12">
                    <div class="flex items-center gap-4">
                        <div class="flex -space-x-3">
                            <div
                                class="w-12 h-12 rounded-full bg-linear-to-br from-blue-400 to-blue-600 border-4 border-white shadow-lg">
                            </div>
                            <div
                                class="w-12 h-12 rounded-full bg-linear-to-br from-purple-400 to-purple-600 border-4 border-white shadow-lg">
                            </div>
                            <div
                                class="w-12 h-12 rounded-full bg-linear-to-br from-pink-400 to-pink-600 border-4 border-white shadow-lg">
                            </div>
                            <div
                                class="w-12 h-12 rounded-full bg-linear-to-br from-orange-400 to-orange-600 border-4 border-white shadow-lg">
                            </div>
                            <div
                                class="w-12 h-12 rounded-full bg-linear-to-br from-green-400 to-green-600 border-4 border-white shadow-lg">
                            </div>
                        </div>
                        <div class="text-left">
                            <p class="text-gray-900 font-bold text-lg">2.5M+ Active Users</p>
                            <p class="text-gray-500 text-sm">Trusted by professionals worldwide</p>
                        </div>
                    </div>
                </div>

                <!-- CTA Buttons -->
                <div class="flex items-center justify-center gap-6 flex-wrap mb-16">
                    <Button as="button" variant="default" class="py-7 px-10 text-lg hover:bg-gray-800">
                        <ion-icon size="large" name="videocam-outline"></ion-icon>
                        Start Free Meeting
                    </Button>
                    <Button as="button" variant="ghost"
                        class="py-7 px-10 text-lg flex items-center gap-3 border border-gray-200 hover:border-[#FF4D3C] hover:bg-white hover:text-[#FF4D3C]">
                        <ion-icon size="large" name="play-circle-outline"></ion-icon>
                        Watch Demo Video
                    </Button>
                </div>


                <!-- Features Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <Card v-for="(card, index) in FeaturesCard" :key="index" class="border shadow-none px-8 py-10">
                        <CardHeader>
                            <div :class="card.class"
                                class="p-4 text-white rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <ion-icon size="large" :name="card.icon"></ion-icon>
                            </div>
                        </CardHeader>
                        <CardDescription>
                            <h3 class="text-ce font-bold text-gray-900 mb-2">{{ card.title }}</h3>
                            <p class="text-gray-600 text-sm">{{ card.description }}</p>
                        </CardDescription>
                    </Card>
                </div>
            </div>
        </div>
    </header>
</template>