module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              query: {
                presets: [ '@babel/preset-env' ],
              },
            },
          ]
        }
      ]
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js',
      library: 'Editor',
      libraryTarget: 'umd',
      libraryExport: 'default'
    }
  };
  