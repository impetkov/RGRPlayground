module.exports = {
    entry: './App/js/index.js',
    output: {
        path: `${__dirname}/App/public`,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
