<script lang="ts" setup>
import { ref } from 'vue';

const videoElement = ref<HTMLVideoElement | null>(null);
defineExpose({
    video: videoElement
});

const props = defineProps({
    media: {
        type: Array,
        required: true
    }
});

</script>

<template>
    <div v-if="!props.media[0] || !props.media[1]"
         class="absolute inset-0 flex items-center justify-center text-white/60">
        <div class="text-center">
            <div
                class="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ion-icon class="text-5xl text-white/80" name="person-outline"></ion-icon>
            </div>
            <p class="text-sm">{{ !props.media?.[0] ? 'Camera is off' : 'Video disabled' }}</p>
        </div>
    </div>
    <video
        ref="videoElement"
        autoplay
        class="w-full h-full object-cover mirror"
        playsinline>
    </video>
</template>

<style scoped>
.mirror {
    transform: scaleX(-1);
}
</style>
