const webpack = require('webpack');
const path = require('path');

const examples = ['color-editor', 'mailbox', 'todos', 'tree'];

module.exports = examples.map(function(example) {
    return {
        entry: './' + example + '/src/index.tsx',
        output: {
            path: path.resolve(__dirname, example + '/dist'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        }
    };
});
