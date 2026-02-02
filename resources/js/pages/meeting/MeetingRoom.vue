<script lang="ts" setup>
import { ref } from 'vue';
import GrayLayer from '@/components/GrayLayer.vue';
import Microphone from '@/components/Microphone.vue';
import Button from '@/components/ui/button/Button.vue';
import Chat from '@/components/ui/Chat/Chat.vue';
import Input from '@/components/ui/input/Input.vue';
import Label from '@/components/ui/label/Label.vue';

const participants = ref([
    {
        name: 'Anne Hathaway',
        role: 'Host',
        image: 'https://i.pravatar.cc/150?u=anne',
        isHost: true,
        isMicrophoneON: true,
        isCamera: true
    },
    {
        name: 'Robert Pattinson',
        role: '',
        image: 'https://i.pravatar.cc/150?u=robert',
        isHost: false,
        isMicrophoneON: true,
        isCamera: false
    },
    {
        name: 'Natalie Portman',
        role: '',
        image: 'https://i.pravatar.cc/150?u=natalie',
        isHost: false,
        isMicrophoneON: false,
        isCamera: true
    },
    {
        name: 'Anne Hathaway',
        role: 'Host',
        image: 'https://i.pravatar.cc/150?u=anne',
        isHost: false,
        isMicrophoneON: false,
        isCamera: false
    }
]);

const messages = ref([
    {
        sender: 'Robert',
        text: 'Please turn on your camera guys',
        time: '12:02 pm',
        isMe: false,
        avatar: 'https://i.pravatar.cc/150?u=robert'
    },
    {
        sender: 'You',
        text: 'Okey dokey! and please don\'t forget fill the attendance form 🙏',
        time: '12:04 pm',
        isMe: true,
        avatar: 'https://i.pravatar.cc/150?u=me'
    },
    {
        sender: 'Natalie',
        text: 'Okay!',
        time: '12:05 pm',
        isMe: false,
        avatar: 'https://i.pravatar.cc/150?u=natalie'
    }
]);

</script>

<template>
    <div class="flex h-screen w-full gap-10 px-12 py-6">
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

        <div class="w-3/12 px-2">
            <div class="rounded-xl rounded-br-md bg-white shadow-xl shadow-gray-200/50 overflow-hidden select-none">
                <div class="bg-blue-400/10 rounded-2xl py-5 sticky top-0 z-20">
                    <Label class="capitalize font-bold ml-4 text-blue-700">participants (5)</Label>
                </div>
                <div class="max-h-[150px] overflow-y-auto pb-5 custom-scroll">
                    <div v-for="participant in participants" :key="participant.name"
                         class="flex items-center gap-2 py-2 px-3 cursor-pointer rounded-md transition-all hover:bg-gray-100/30">
                        <img :alt="participant.name"
                             :class="participant.isHost && 'outline-3 outline-[#FF4D3C]'"
                             :src="participant.image"
                             class="size-9 ml-3 rounded-full border-2 border-white">

                        <Label class="text-slate-900 text-sm flex-1">
                            {{ participant.name }}
                            {{ participant.isHost ? '(Host)' : '' }}
                        </Label>

                        <span class="flex items-center gap-2 pr-2">
                             <ion-icon
                                 :class="participant.isMicrophoneON ? 'text-green-500' : 'text-gray-400'"
                                 :name="participant.isMicrophoneON ? 'mic-outline' : 'mic-off-outline'">
                             </ion-icon>
                             <ion-icon
                                 :class="participant.isCamera ? 'text-slate-700' : 'text-gray-400'"
                                 :name="participant.isCamera ? 'videocam-outline' : 'videocam-off-outline'">
                             </ion-icon>
                        </span>
                    </div>
                </div>
            </div>

            <div class="messages-container rounded-2xl bg-white shadow-xl flex flex-col h-[430px] mt-4 overflow-hidden">
                <div class="bg-blue-400/10 rounded-2xl py-5 sticky top-0 z-20">
                    <Label class="capitalize font-bold ml-4 text-blue-700">Messages</Label>
                </div>

                <Chat :messages="messages" />

                <div class="p-4 border-t border-gray-100">
                    <div class="relative flex items-center bg-gray-50 rounded-xl px-4 py-2 border border-gray-200">
                        <Input
                            class="bg-transparent! border-none! ring-0! shadow-none!"
                            default-value=""
                            placeholder="Write message"
                            type="text"
                        />
                        <Button variant="default">
                            <ion-icon class="text-xl" name="paper-plane-outline"></ion-icon>
                        </Button>
                    </div>
                </div>
            </div>
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
