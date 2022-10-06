const mix = require('laravel-mix');
var LiveReloadPlugin = require('webpack-livereload-plugin');
// require('laravel-mix-polyfill');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    plugins: [
        new LiveReloadPlugin()
    ]
});
/*mix.alias({
    // '@': path.join(__dirname, 'resources/js')
    '@': path.join(__dirname, 'resources/js/src')
});*/
/*mix.extend(
    new class {
        dependencies() {
            return ["@babel/plugin-transform-runtime"];
        }
        babelConfig() {
            return {
                plugins: [
                    [
                        "@babel/plugin-transform-runtime",
                        {
                            "regenerator": true
                        }
                    ]
                ]
            };
        }
    }()
);*/

mix.webpackConfig({
    resolve: {
        modules: [
            'node_modules',
            'resources/js/src',
        ],
/*        alias: {
            'aliasName' : 'MyModule/src/'
        }*/
    }
});
mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

/*mix.polyfill({
    enabled: true,
    useBuiltIns: "usage",
    targets: "firefox 50, IE 11"
})*/
    /* .css('resources/js/src/css/style.css', 'public/css2');*/





//mix.browserSync('nginx');
/*mix.browserSync({
    // proxy: 'api.local.com'
       host: 'front.local.com',
    /!*proxy: 'front.local.com',
    // port: 80,
    open: false,*!/
});*/
