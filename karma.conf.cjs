const path = require('path');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],
    files: [
      'src/test/setupTests.js',
      'src/test/**/*.spec.jsx'
    ],
    preprocessors: {
      'src/test/setupTests.js': ['webpack'],
      'src/test/**/*.spec.jsx': ['webpack']
    },
    webpack: {
      mode: 'development',
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
          // NUEVA REGLA PARA ARCHIVOS ESTÁTICOS
          {
            test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
            type: 'asset/resource'
          }
        ],
      },
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
      },
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
    },
    browsers: ['Chrome'],
    singleRun: true,
    restartOnFileChange: true,
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-coverage'
    ]
  });
};