<script lang="ts" setup>

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
    <div
        :class="['px-4 py-2 rounded-xl text-sm', content.isMe
             ? 'bg-green-200/50 text-gray-800 rounded-tr-none' :
             'bg-gray-100 text-gray-800 rounded-tl-none']">
        {{ content.text }}
    </div>
</template>
