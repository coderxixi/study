import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    name: {
      type: String,
      default: '刘嘻嘻'
    },
    age: {
      type: String,
      default: '18'
    }
  },
  setup(props, { emit, attrs }) {
    const isactive = ref(0)
    console.log(isactive)
    const BtnFn = () => {
      isactive.value++
    }
    return () => {
      return (
        <div>
          <div onClick={BtnFn}>Test:{isactive.value}</div>
          <div>
            姓名:{props.name}-{props.age}
          </div>
        </div>
      )
    }
  }
})
