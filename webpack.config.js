const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
    output: {
        chunkFilename: 'js/[name].js?id=[chunkhash]',
    },

    // module: {
    //     rules: [
    //         {
    //             oneOf: [
    //                 {
    //                     test: /\.css$/,
    //                     use: ['css-loader'],
    //                     sideEffects: true
    //                 }
    //             ]
    //         }
    //     ]
    // },
};
