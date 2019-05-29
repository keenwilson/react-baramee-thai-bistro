const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "true"
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#987a97",
      "@link-color": "#2f2645",
      "@text-color": "#181422",
      "@font-size-base": "14px"
    }
  })
);
