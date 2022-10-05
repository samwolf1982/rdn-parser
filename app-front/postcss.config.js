module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-pxtorem'),
        require('postcss-variables'),
        require('postcss-nested'),
        require('postcss-animation'),
        require('postcss-color-mod-function'),
        require('postcss-inline-svg'),
        require('postcss-custom-media')
    ]
}