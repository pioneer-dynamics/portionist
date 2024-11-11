<script setup>
    import PrimaryButton from '@/Components/PrimaryButton.vue';
    import { useForm, usePage } from '@inertiajs/vue3';
    import { computed, ref, onMounted } from 'vue';
    
    const props = defineProps({
        recipe: Object,
    })

    const form = useForm({

    })

    const saved = ref(false)

    onMounted(() => saved.value = props.recipe.is_saved)

    const toggleBookmark = () => {
        form.post(route('recipes.toggleBookmark', props.recipe.id), {
            preserveScroll: true,
            onSuccess: () => {
                saved.value = !saved.value
            }
        })
    }

</script>
<template>
    <span>
        <div class="flex gap-2 items-center">
            <PrimaryButton class="text-xs" @click.prevent="toggleBookmark()">
                <span v-if="!form.processing">
                    <span v-if="!saved">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    </span>
                    <span v-if="saved">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                            <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </span>
                <span v-if="form.processing">
                    <svg aria-hidden="true" class="size-4 text-gray-200 animate-spin dark:text-gray-800 fill-branding-green-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </span>
            </PrimaryButton>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{recipe.title}}</h5>
        </div>
        <h6 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ingredients</h6>
        <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
            </ul>
        </div>
        <h6 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Steps</h6>
        <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <ol class="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                <li v-for="direction in recipe.directions" :key="direction">{{ direction }}</li>
            </ol>
        </div>
    </span>
</template>