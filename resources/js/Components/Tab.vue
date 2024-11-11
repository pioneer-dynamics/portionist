<script setup>
    import LinkIfPermitted from '@/Components/LinkIfPermitted.vue';
    import { computed } from 'vue';

    const props = defineProps({
        href: String,
        condition: {
            type: Boolean,
            default: true
        },
        active: {
            type: Boolean,
            default: false
        },
    })

    const classes = computed(() => props.active 
        ? 'inline-block p-4 text-branding-blue-600 border-b-2 border-branding-green-600 rounded-t-lg active dark:text-branding-green-500 dark:border-branding-green-500'
        : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-branding-blue-600 hover:border-branding-blue-300 dark:hover:text-branding-blue-200 dark:text-branding-blue-400'
    )
</script>
<template>
    <li class="me-2">
        <LinkIfPermitted :href="props.href" :condition="props.condition" :class="classes"><slot/></LinkIfPermitted>
    </li>
</template>