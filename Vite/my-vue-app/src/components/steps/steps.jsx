import { defineComponent, ref } from 'vue'
import './steps.less'
export default defineComponent({
  setup(props, { slots, emit, attrs }) {
    return () => {
      return (
        <div className="vant-stpes">
          <div className="vant-stpes-item">{slots.default?.()}</div>
        </div>
      )
    }
  }
})
