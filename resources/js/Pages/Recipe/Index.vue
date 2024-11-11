<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue';
    import { useForm, usePage } from '@inertiajs/vue3';
    import SelectInput from '@/Components/SelectInput.vue';
    import RecipeCard from '@/Components/RecipeCard.vue';
    import TextInput from '@/Components/TextInput.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue';
    import FlatForm from '@/Components/FlatForm.vue';
    import { Link } from '@inertiajs/vue3';
    import { onMounted, ref, computed } from 'vue';
    import TabGroup from '@/Components/TabGroup.vue';
    import Tab from '@/Components/Tab.vue';
    import Paginator from '@/Components/Paginator.vue';

    const props = defineProps({
        recipes: Array,
        query: String,
    })

    const form = useForm({
        query: props.query ? props.query : '',
    })

    const titleCase = (s) => s.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

    const title = computed(() => titleCase(route().params.filter)+' Recipes')

    const findRecipes = () => {
        form.get(route('recipes.index', {recipeType: route().params.recipeType, filter: route().params.filter}), {
            preserveState: true
        });
    }
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
                <div class="mt-4 bg-branding-blue-100 dark:bg-branding-blue-500 overflow-hidden shadow-xl sm:rounded-lg p-4">
                    <FlatForm @submitted="findRecipes">
                        <TextInput
                            placeholder="Start typing..."
                            class="w-full"
                            v-model="form.query"
                            type="search"
                            @search="findRecipes"
                            @keyup="findRecipes"
                        />
                        <PrimaryButton :disabled="form.processing" >
                            <span v-if="form.processing">
                                <div role="status">
                                    <svg aria-hidden="true" class="mx-6 w-6 h-6 text-gray-200 animate-spin dark:text-gray-800 fill-branding-green-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span class="sr-only">searching...</span>
                                </div>
                            </span>
                            <span v-else>Filter</span>
                        </PrimaryButton>
                    </FlatForm>
                </div>
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