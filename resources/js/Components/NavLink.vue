<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() => {
    return props.active
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-branding-green-400 dark:border-branding-green-600 text-sm font-medium leading-5 text-branding-blue-900 dark:text-branding-blue-100 focus:outline-none focus:border-branding-green-700 transition duration-150 ease-in-out'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-branding-blue-500 dark:text-branding-blue-400 hover:text-branding-blue-700 dark:hover:text-branding-blue-300 hover:border-branding-blue-300 dark:hover:border-branding-blue-700 focus:outline-none focus:text-branding-blue-700 dark:focus:text-branding-blue-300 focus:border-branding-blue-300 dark:focus:border-branding-blue-700 transition duration-150 ease-in-out';
});
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
