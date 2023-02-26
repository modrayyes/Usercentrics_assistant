// const path = require('path');
// const copyPlugin = require('copy-webpack-plugin');
// const HtmlPlugin = require('html-webpack-plugin');


// module.exports = {
// entry: {
//     popup: path.resolve('src/popup/popup.tsx'),
//     options: path.resolve('src/options/options.tsx'),
//     opt: path.resolve('src/opt/opt.tsx')
// },
// module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
//         type: 'asset/resource'
//       }
//     ]
//   },
// plugins: [
// new copyPlugin({
//     patterns:[
//         {
//             from: path.resolve('src/static'),
//             to: path.resolve('dist'), 
//         }
//     ]
// }),
// ...getHtmlPlugins([
//     'popup',
//     'options',
//   ]),
// ],
// resolve: {
//   extensions: ['.tsx', '.ts', '.js'],
// },
// output: {
//     filename: '[name].js',
//     path: path.resolve('dist'),
// },
// optimization: {
//   splitChunks: {
//     chunks: 'all',
//   },
// }
// }


// function getHtmlPlugins(chunks) {
//   return chunks.map(chunk => new HtmlPlugin({
//     title: 'React Extension',
//     filename: `${chunk}.html`,
//     chunks: [chunk],
//   }))
// }

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    popup: path.resolve('src/popup/popup.tsx'),
    options: path.resolve('src/options/options.tsx'),
    background: path.resolve('src/background/background.ts'),
    index: path.resolve('src/index/index.ts')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/static'),
          to: path.resolve('dist'),
        }
      ]
    }),
    ...getHtmlPlugins([
      'popup',
      'options'
    ]),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  }
}

function getHtmlPlugins(chunks) {
  return chunks.map(chunk => new HtmlPlugin({
    title: 'React Extension',
    filename: `${chunk}.html`,
    chunks: [chunk],
  }))
}
