export default {
  input: "./src/main.js",
  output: [
    {
      format: "umd",
      name: "whyUtils",
      file: "dist/why.umd.js"
    },
    {
      format: "cjs",
      file: "dist/why.commonjs.js"
    },
    {
      format: "amd",
      file: "dist/why.amd.js"
    },
    {
      format: "es",
      file: "dist/why.es.js"
    },
    {
      format: "iife",
      name: "whyUtils",
      file: "dist/why.browser.js"
    }
  ]
}