const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  fixBabelImports,
  addLessLoader
} = require('customize-cra')

module.exports = override(
  disableEsLint(),
  addDecoratorsLegacy(),
  fixBabelImports('import-antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#966179',
      '@link-color': '#77445b',
      '@text-color': '#222',
      '@font-size-base': '15px'
    }
  })
)
