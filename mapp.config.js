module.exports = {
  port: 8000,
  https: false,
  entry: 'src/index.jsx',
  htmlTemplatePath: 'src/index.html',
  dataFolderPath: 'data/',
  staticFolderName: 'assets', // omit src, just folder name, i.e: 'assets'
  assetPath: 'build',
  assetPublicPath: '/',
  assetResourceName: 'assets/index.[contenthash]',
};