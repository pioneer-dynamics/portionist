<script setup>
import { computed, useSlots } from 'vue';
import SectionTitle from './SectionTitle.vue';

defineEmits(['submitted']);

</script>

<template>
    <form @submit.prevent="$emit('submitted')">
        <div class="flex flex-wrap sm:flex-nowrap gap-2 sm:space-y-0 sm:space-y-0">
            <slot/>
        </div>
    </form>
</template>
