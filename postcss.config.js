const tailwind = require('tailwindcss')

module.exports = {
    plugins: [
        require('postcss-easy-import'),
        require('./tailwind.js'),
        require('autoprefixer')
    ]
}