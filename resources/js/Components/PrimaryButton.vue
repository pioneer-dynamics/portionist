<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="inline-flex items-center px-4 py-2 bg-branding-blue-500 dark:bg-branding-blue-600 border border-transparent rounded-md font-semibold text-xs text-branding-green-700 dark:branding-green-300 uppercase tracking-widest hover:bg-branding-blue-700 dark:hover:bg-branding-blue-500 focus:bg-branding-blue-700 dark:focus:bg-branding-blue-500 active:bg-branding-blue-900 dark:active:bg-branding-blue-700 focus:outline-none focus:ring-2 focus:ring-branding-blue-500 focus:ring-offset-2 dark:focus:ring-offset-branding-blue-800 disabled:opacity-50 transition ease-in-out duration-150">
        <slot />
    </button>
</template>
