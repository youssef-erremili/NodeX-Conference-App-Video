<script lang="ts" setup>
import ChatDetails from '@/components/ui/Chat/ChatDetails.vue';

interface ChatContent {
    text: string,
    isMe: boolean
}

type Props = {
    content: ChatContent,
}

withDefaults(defineProps<Props>(), {});

</script>

<template>
    <ChatDetails :details="content" />

    <div class="flex items-center gap-2">
        <div
            :class="['px-4 py-2 rounded-xl text-sm', content.isMe ? 'bg-green-200/50 text-gray-800 rounded-tr-none' : 'bg-gray-100 text-gray-800 rounded-tl-none']">
            {{ content.text }}
        </div>
    </div>
</template>
