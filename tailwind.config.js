const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: [
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.ts',
        './resources/**/*.tsx',
        './resources/**/*.css',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary-color': colors.cyan['600'],
                'primary-color-dark': colors.cyan['700'],
                'secondary-color': colors.cyan['200'],
                'secondary-color-dark': colors.cyan['300'],
                'secondary-color-light': colors.cyan['100'],
                'text-normal': colors.gray['500'],
                'text-dark': colors.gray['700'],
                'error-color': colors.red['500'],
                'error-color-dark': colors.red['600'],
                cyan: colors.cyan,
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
