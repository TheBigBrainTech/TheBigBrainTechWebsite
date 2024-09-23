const path = require('path');

module.exports = {
    entry: './src/index.js', // Your main entry point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/', // Serve from root
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        // Allow importing from directories outside of src
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules/aws-amplify'),
            path.resolve(__dirname, 'node_modules/@aws-amplify/storage'),
            'node_modules',
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        historyApiFallback: true, // For React Router
    },
    mode: 'development', // Change to 'production' for production build
};
