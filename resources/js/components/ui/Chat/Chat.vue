<script lang="ts" setup>

import ChatBubble from '@/components/ui/Chat/ChatBubble.vue';

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
             :class="['flex gap-3', message.isMe ? 'flex-row-reverse' : 'flex-row']">
            <ChatBubble :content="message" />
        </div>
    </div>
</template>
