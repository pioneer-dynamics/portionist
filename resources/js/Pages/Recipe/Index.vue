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
    import TabGroup from '@/Components/TabGroup.vue';
    import Tab from '@/Components/Tab.vue';
    import Paginator from '@/Components/Paginator.vue';

    defineProps({
        recipes: Array,
    })

    const titleCase = (s) => s.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

    const title = computed(() => titleCase(route().params.filter)+' Recipes')
</script>
<template>
    <AppLayout :title="title">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ title }}
            </h2>
        </template>

        <div class="py-5">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <TabGroup>
                    <Tab :href="route('recipes.index', {recipeType: 'cocktail', filter: route().params.filter})" :active="route().params.recipeType === 'cocktail'">Cocktails</Tab>
                    <Tab :href="route('recipes.index', {recipeType: 'food', filter: route().params.filter})" :active="route().params.recipeType === 'food'">Food</Tab>
                </TabGroup>
                <div class="py-4" v-if="recipes.data.length > 0">
                    <div v-for="recipe in recipes.data" :key="recipe.id" class="m-4 p-6 bg-branding-blue-50 border border-branding-blue-200 rounded-lg shadow dark:bg-branding-blue-800 dark:border-branding-blue-700">
                        <RecipeCard :recipe="recipe"/>
                    </div>
                </div>
                <div class="py-4">
                    <Paginator :links="recipes.meta.links" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>