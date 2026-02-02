<script lang="ts" setup>
interface Message {
    sender: string,
    time: number | string,
    isMe: boolean
}

type Props = {
    details: Message,
}

withDefaults(defineProps<Props>(), {});

</script>

<template>
    <div :class="['flex items-center gap-2 mb-1', details.isMe ? 'flex-row-reverse' : 'flex-row']">
        <span class="text-xs font-semibold text-gray-500">{{ details.sender }}</span>
        <span class="text-[10px] text-gray-400 whitespace-nowrap">{{ details.time }}</span>
    </div>
</template>
