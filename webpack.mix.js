const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// Website Resources
mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css').options({
        processCssUrls: true,
    })
    .webpackConfig(require('./webpack.config'));

// Dashboard resources
mix.js('resources/js/dashboard.js', 'public/js')
    .vue()
    .postCss('resources/css/dashboard.css', 'public/css').options({
        processCssUrls: true,
    })
    .webpackConfig(require('./webpack.config'));

// // GIP Resources
// mix.js('resources/js/gip.js', 'public/js')
//     .vue()
//     .postCss('resources/css/gip.css', 'public/css').options({
//         processCssUrls: true,
//     })
//     .webpackConfig(require('./webpack.config'));

// // GIP Dashboard Resources
// mix.js('resources/js/gip-dashboard.js', 'public/js')
//     .vue()
//     .postCss('resources/css/gip-dashboard.css', 'public/css').options({
//         processCssUrls: true,
//     })
//     .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}

// .postcss([
//     require('postcss-assets')({
//         loadPaths: ['**']
//     })
// ])
