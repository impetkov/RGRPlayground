module.exports = {
    entry: './App/index.js',
    output: {
        path: `${__dirname}/App`,
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
