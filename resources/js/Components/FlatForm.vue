<script setup>
import { computed, useSlots } from 'vue';
import SectionTitle from './SectionTitle.vue';

defineEmits(['submitted']);

</script>

<template>
    <form @submit.prevent="$emit('submitted')">
        <div class="flex gap-2">
            <slot/>
        </div>
    </form>
</template>
