<script lang="ts" setup>
const props = defineProps({
    isMicrophoneON: {
        type: Boolean,
        required: true,
        default: false
    }
});

</script>

<template>
    <span
        :class="props.isMicrophoneON ? 'bg-green-500' : 'bg-red-500'"
        class="absolute top-3 right-3 z-10 flex items-center justify-center size-8 text-white rounded-full">
        <ion-icon :name="props.isMicrophoneON ? 'mic-outline' : 'mic-off-outline'"></ion-icon>
    </span>
</template>
