<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Logo from '../../static/logo.png';
import PrimaryLink from '@/Components/PrimaryLink.vue';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    totalRecipes: {
        type: Number,
        default: 0,
    }
});

</script>

<template>
    <Head title="Welcome" />
    <div class="bg-gray-100 h-screen">
        <header class="bg-white dark:bg-branding-blue-600 py-4">
        <nav class="container mx-auto flex justify-between items-center">
            <Link href="/" class="text-color text-lg font-bold">
                <img :src="Logo" alt="Portion.ist logo" width="100" height="100" class="mr-2">
            </Link>
            <ul class="flex items-center">
                <li v-if="canLogin" class="mr-6">
                    <Link 
                        v-if="$page.props.auth.user" 
                        :href="route('generate.form')" 
                        class="rounded-md px-3 py-2 text-branding-blue-500 dark:hover:bg-branding-blue-800 ring-1 ring-transparent transition hover:text-branding-blue-400 hover:bg-branding-green-600 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-branding-green-600 dark:hover:bg-branding-green-500 dark:focus-visible:ring-white"
                    >
                        Generate Recipies
                    </Link>
                    <template v-else>
                            <Link
                                :href="route('login')"
                                class="rounded-md px-3 py-2 text-branding-blue-500 dark:hover:bg-branding-blue-800 ring-1 ring-transparent transition hover:text-branding-blue-400 hover:bg-branding-green-600 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-branding-green-600 dark:hover:bg-branding-green-500 dark:focus-visible:ring-white"
                            >
                                Log in
                            </Link>

                            <Link
                                v-if="canRegister"
                                :href="route('register')"
                                class="rounded-md px-3 py-2 text-branding-blue-500 dark:hover:bg-branding-blue-800 ring-1 ring-transparent transition hover:text-branding-blue-400 hover:bg-branding-green-600 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-branding-green-600 dark:hover:bg-branding-green-500 dark:focus-visible:ring-white"
                            >
                                Register
                            </Link>
                    </template>
                </li>
            </ul>
        </nav>
    </header>
    <main class="container mx-auto p-4 pt-6">
        <section class="bg-branding-blue-100 dark:bg-branding-blue-800 rounded shadow-md p-4 text-black dark:text-white">
            <h1 class="text-3xl font-bold mb-4 text-color">Discover new flavors with <span class="text-branding-green-500 bg-branding-blue-500 px-1 rounded">portion.ist</span></h1>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">Generate interesting mixes of cocktails, mocktails, and food based on ingredients you have. We already have <span class="font-bold text-branding-green-500 bg-branding-blue-500 px-1 rounded">{{ totalRecipes }}</span> recipes in our database and you can generate more!!!.</p>
            <PrimaryLink :href="route('generate.form')">Get started</PrimaryLink>
        </section>
        <section class="mt-6">
            <h2 class="text-2xl font-bold mb-4 text-color">How it works</h2>
            <ul class="flex flex-wrap -mx-4">
                <li class="w-full md:w-1/2 xl:w-1/3 p-4">
                    <i class="fas fa-search text-4xl text-gray-600 mb-4"></i>
                    <h3 class="text-lg font-bold mb-2 text-color">Search for ingredients</h3>
                    <p class="text-gray-600">Enter the ingredients you have at home.</p>
                </li>
                <li class="w-full md:w-1/2 xl:w-1/3 p-4">
                    <i class="fas fa-mix text-4xl text-gray-600 mb-4"></i>
                    <h3 class="text-lg font-bold mb-2 text-color">Get mix ideas</h3>
                    <p class="text-gray-600">Our algorithm generates unique mix ideas based on your ingredients.</p>
                </li>
                <li class="w-full md:w-1/2 xl:w-1/3 p-4">
                    <i class="fas fa-glass-martini text-4xl text-gray-600 mb-4"></i>
                    <h3 class="text-lg font-bold mb-2 text-color">Enjoy your creations</h3>
                    <p class="text-gray-600">Try out new flavors and enjoy the experience!</p>
                </li>
            </ul>
        </section>
    </main>
  </div>
</template>