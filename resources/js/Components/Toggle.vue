<script setup>

    import {computed} from 'vue';
    
    const emit = defineEmits(['update:checked']);


    const props = defineProps({
        label: String,
        value: {
            type: String,
            default: null,
        },
        checked: {
            type: [Array, Boolean],
            default: false,
        },
    })

    const proxyChecked = computed({
        get() {
            return props.checked;
        },

        set(val) {
            emit('update:checked', val);
        },
    });

</script>
<template>
    <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model="proxyChecked" :value="value" class="sr-only peer">
        <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-branding-blue-400 dark:peer-focus:ring-branding-blue-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-branding-blue-400"></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"><slot>{{ label }}</slot></span>
    </label>
</template>