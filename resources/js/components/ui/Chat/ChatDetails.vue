<script lang="ts" setup>
interface Message {
    avatar: string,
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
    <img :alt="details.sender" :src="details.avatar" class="size-8 rounded-full object-cover mt-1">

    <div :class="['flex flex-col max-w-[70%]', details.isMe ? 'items-end' : 'items-start']">
        <div :class="['flex flex-col w-[100%]', details.isMe ? 'items-end' : 'items-start']">
            <div
                :class="['flex items-center gap-2 mb-1', details.isMe ? 'flex-row-reverse' : 'flex-row']">
                <span class="text-xs font-semibold text-gray-500">{{ details.sender }}</span>
                <span class="text-[10px] text-gray-400 whitespace-nowrap">{{ details.time }}</span>
            </div>
        </div>
    </div>
</template>
