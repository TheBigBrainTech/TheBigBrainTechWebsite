const path = require('path');

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.resolve.modules = [
                path.resolve(__dirname, 'src'),
                'node_modules',
            ];
            return webpackConfig;
        },
    },
};