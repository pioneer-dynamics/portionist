import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'branding-blue': {
                    50: '#E5E5EA',
                    100: '#C9C9D6',
                    200: '#A6A6C2',
                    300: '#8585B2',
                    400: '#6666A2',
                    500: '#333B6A',
                    600: '#2C2F5A',
                    700: '#24283F',
                    800: '#1C1D34',
                    900: '#14151F',
                },
                'branding-green': {
                    50: '#F7FFF7',
                    100: '#E6FFD9',
                    200: '#C9F9C5',
                    300: '#A8F2A5',
                    400: '#8CEA95',
                    500: '#B7FEAE',
                    600: '#A2F7A5',
                    700: '#8AFD9C',
                    800: '#7AE7A3',
                    900: '#68E3A1',
                }
            },
        },
    },

    plugins: [forms, typography],
};
