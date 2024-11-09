<script setup>
import { Link } from '@inertiajs/vue3';
import Login from '../../static/logo.png';
</script>

<template>
    <Link :href="'/'">
        <img :src="Login" alt="Portion.ist logo" width="100" height="100">
    </Link>
</template>
