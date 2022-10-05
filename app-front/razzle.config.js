const path = require("path");
const webpack = require("webpack");
// const doc = require('global/document')
module.exports = {
    options: {
        verbose: false, // set to true to get more info/error output
        debug: { // debug flags
            options: false, // print webpackOptions that will be used in webpack config
            config: false, // print webpack config
            nodeExternals: false // print node externals debug info
        },
        buildType: 'iso', // or 'spa', 'serveronly', 'iso-serverless' and 'serveronly-serverless'
        // cssPrefix: 'static/css',
        // jsPrefix: 'static/js',
        // mediaPrefix: 'static/media',
        cssPrefix: 'css',
        jsPrefix: 'js',
        mediaPrefix: 'media',
        staticCssInDev: false, // static css in development build (incompatible with css hot reloading)
        browserslist: undefined, // or what your apps package.json says
        enableSourceMaps: true,
        enableReactRefresh: false,
        enableTargetBabelrc: false, // enable to use .babelrc.node and .babelrc.web
        enableBabelCache: true,
        forceRuntimeEnvVars: [], // force env vars to be read from env e.g. ['HOST', 'PORT']
        disableWebpackbar: false, // can be true to disable all environments or target to disable specific environment such as "node" or "web"
        staticExport: {
            parallel: 5, // how many pages to render at a time
            routesExport: 'routes',
            renderExport: 'render',
            scriptInline: false,
            windowRoutesVariable: 'RAZZLE_STATIC_ROUTES',
            windowRoutesDataVariable: 'RAZZLE_STATIC_DATA_ROUTES'
        },
    },


    // modifyWebpackConfig({
    //                         env: {target, dev},
    //                         webpackConfig,
    //                         webpackObject,
    //                         options: {razzleOptions, webpackOptions},
    //                         paths,
    //                     }) {
    //     return new Promise(async resolve => {
    //         if (target === 'web') {
    //             // client only
    //             webpackConfig.module.rules = webpackConfig.module.rules.concat([
    //                 {
    //                     test: /\.(sass|scss)$/i,
    //                     use: [{
    //                         loader: "style-loader"
    //                     }, {
    //                         loader: "css-loader?url=false"
    //                     }, {
    //                         loader: "sass-loader"
    //                     }]
    //                 },
    //             ])
    //
    //             webpackConfig.devServer.host = 'bixex.local.com'
    //
    //             webpackConfig.node = {
    //                 child_process: 'empty',
    //                 fs: 'empty',
    //                 module: 'empty',
    //                 net: 'empty',
    //                 tls: 'empty',
    //             }
    //         }
    //         if (target === 'node') {
    //             // server only
    //             console.log("NODExx")
    //             webpackConfig.module.rules = webpackConfig.module.rules.concat([
    //                 {
    //                     test: /\.(scss|css|styl|less|png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot|ico)$/i,
    //                     loader: 'ignore-loader'
    //                 },
    //             ])
    //         }
    //         if (dev) {
    //             // dev only
    //             //await getDevcert();
    //         } else {
    //             // prod only
    //         }
    //
    //         //webpackConfig.output.path = path.resolve('dist')
    //
    //         webpackConfig.plugins = webpackConfig.plugins.concat([
    //             new webpack.ProvidePlugin({
    //                 $: 'jquery',
    //                 w: path.resolve('./src/window.mock.js'),
    //                 document: ['global', 'document']
    //                 //document: 'global/document'
    //             }),
    //             // new CopyWebpackPlugin([
    //             //   {from: 'src/assets', to: 'media/assets'},
    //             // ]),
    //         ])
    //
    //         //console.log(webpackConfig.module)
    //
    //         // Do some stuff...
    //         resolve(webpackConfig);
    //     });
    // },

};