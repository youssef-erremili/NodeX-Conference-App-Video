<script lang="ts" setup>

import ChatBubble from '@/components/ui/Chat/ChatBubble.vue';
import ChatDetails from '@/components/ui/Chat/ChatDetails.vue';

const props = defineProps({
    messages: {
        type: [Array, Object, String],
        required: true
    }
});

</script>

<template>
    <div class="flex-1 overflow-y-auto p-4 space-y-6 custom-scroll">
        <div v-for="(message, index) in props.messages" :key="index"
             :class="['flex gap-3', message.isMe ? 'flex-row-reverse items-start' : 'flex-row items-start']">

            <img :alt="message.sender" :src="message.avatar" class="size-8 rounded-full object-cover mt-1">

            <div :class="['flex flex-col', message.isMe ? 'items-end' : 'items-start']">
                <ChatDetails :details="message" />
                <ChatBubble :content="message" />
            </div>
        </div>
    </div>
</template>
