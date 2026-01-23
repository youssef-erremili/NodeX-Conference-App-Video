<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';


</script>

<template>
    <Navbar :can-register="true"/>

    <slot></slot>

    <Footer />
</template>