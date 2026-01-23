<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';


</script>

<template>
    <Navbar :can-register="true" />

    <slot></slot>

    <Footer />
</template>