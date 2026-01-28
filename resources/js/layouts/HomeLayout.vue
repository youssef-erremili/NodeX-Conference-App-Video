<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';


const props = defineProps({
    displayFooter: {
        type: Boolean,
        default: true
    }
})

</script>

<template>
    <Navbar :can-register="true" />

    <slot></slot>

    <Footer v-if="props.displayFooter"></Footer>
</template>