<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="inline-flex items-center py-2 border-0 border-transparent rounded-md font-semibold text-xs text-branding-blue-300 dark:branding-blue-300 uppercase tracking-widest disabled:opacity-50 transition ease-in-out duration-150">
        <slot />
    </button>
</template>
