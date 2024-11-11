<script setup>
import { Link } from '@inertiajs/vue3';
const props = defineProps({
    condition: {
        type: Boolean,
        default: true
    },
    href: String,
    as: {
        type: String,
        default: 'a',
    },
})
</script>
<template>
    <Link v-if="condition" :href="href" :as="as">
        <slot />
    </Link>
    <slot v-else />
</template>