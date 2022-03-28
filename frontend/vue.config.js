/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */

module.exports = {
    devServer: {
        historyApiFallback: {
            logger: console.log.bind(console),
            verbose: true,
            disableDotRule: true,
        },
        proxy: 'http://localhost:8000/api',
    },
    assetsDir: 'assets',
    publicPath: '/spa/',
    outputDir: '../public/spa/',
    indexPath: '../../resources/views/frontend.blade.php',
    // chainWebpack: (config) => {
    //     config.module.rule('eslint').use('eslint-loader')
    //         .tap((options) => {
    //             if (options) {
    //                 options.fix = process.env.LINT_ON_SAVE === 'true';
    //             }
    //             return options;
    //         });
    //     config.plugin('provide').use(require.resolve('webpack/lib/ProvidePlugin'), [{
    //         _: 'lodash',
    //         moment: 'moment',
    //     }]);
    //     config.plugin('ignore').use(require.resolve('webpack/lib/IgnorePlugin'), [{
    //         resourceRegExp: /^\.\/locale$/,
    //         contextRegExp: /moment$/,
    //     }]);
    // },
    lintOnSave: undefined,
};
