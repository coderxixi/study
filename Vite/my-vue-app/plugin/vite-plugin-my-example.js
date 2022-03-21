export default function myExample() {
  return {
    name: 'my-example',
    option(opts) {
      console.log('opts')
    },
    buildStart() {
      console.log('buildStart')
    },
    config(config) {
      console.log(config)
    }
  }
}
