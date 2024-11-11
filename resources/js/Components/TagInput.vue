<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    modelValue: String,
    placeholder: String,
});

const $emit  = defineEmits(['update:modelValue']);

const input = ref(null);
const base = ref(null);
const tags = ref([]);

onMounted(() => {
    if (base.value.hasAttribute('autofocus')) {
        input.value.focus();
    }

    tags.value = props.modelValue;
});

defineExpose({ focus: () => input.value.focus() });

const addTag = (event) => {
    event.preventDefault()
        let val = event.target.value.trim()
        if (val.length > 0) {
          if (tags.value.length >= 1) {
            for (let i = 0; i < tags.value.length; i++) {
              if (tags[i] === val) {
                return false
              }
            }
          }
          tags.value.push(val)
          event.target.value = ''
        }
        $emit('update:modelValue', tags.value)
}

const removeTag = (index) => {
    tags.value.splice(index, 1)
    $emit('update:modelValue', tags.value)

};

const removeLastTag = (event) => {
    if (event.target.value.length === 0) {
        removeTag(tags.value.length - 1)
        $emit('update:modelValue', tags.value)
    }
}

const focusTagBox = () => {
    input.value.focus()
}
</script>

<template>
    <div class="" ref="base">
        <div @click="focusTagBox()" class='border-2 p-0 border-white-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-gray-300 focus-within:border-branding-blue-500 dark:focus-within:border-branding-blue-600 focus-within:ring-branding-blue-500 dark:focus-within:ring-branding-blue-600 rounded-md shadow-sm'>
            <div v-for='(tag, index) in tags' :key='tag' class='ml-4 text-sm inline-flex items-center font-bold leading-sm px-3 py-1 bg-branding-blue-500 text-branding-green-700 rounded-full'>
                {{ tag }}
                <span class="ml-2 cursor-pointer" @click='removeTag(index)'>x</span>
            </div>
            <input
                ref="input"
                @keydown.,='addTag'
                @keydown.;='addTag'
                @keydown.delete='removeLastTag'
                @blur="addTag"
                :placeholder="tags.length == 0 ? placeholder : ''"
                class="shadow-none ring-0 focus:ring-0 border-0 focus:border-0 appearance-none focus:outline-0 dark:bg-gray-900 dark:text-gray-300 "
            >
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap');
  
  




</style>

