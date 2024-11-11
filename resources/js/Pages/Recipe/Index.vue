<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue';
    import { useForm, usePage } from '@inertiajs/vue3';
    import SelectInput from '@/Components/SelectInput.vue';
    import RecipeCard from '@/Components/RecipeCard.vue';
    import TagInput from '@/Components/TagInput.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue';
    import FlatForm from '@/Components/FlatForm.vue';
    import { Link } from '@inertiajs/vue3';
    import { onMounted, ref, computed } from 'vue';

    defineProps({
        recipes: Array,
    })

    const titleCase = (s) => s.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

    const title = computed(() => titleCase(route().params.filter)+' '+ titleCase(route().params.recipeType) + ' Recipes')
</script>
<template>
    <AppLayout :title="title">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ title }}
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="py-4" v-if="recipes.data.length > 0">
                    <div v-for="recipe in recipes.data" :key="recipe.id" class="m-4 p-6 bg-branding-blue-50 border border-branding-blue-200 rounded-lg shadow dark:bg-branding-blue-800 dark:border-branding-blue-700">
                        <RecipeCard :recipe="recipe"/>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>