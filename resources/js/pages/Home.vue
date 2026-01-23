<script setup lang="ts">
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';

</script>

<template>
    <Navbar :can-register="true"/>
    <Header />
</template>