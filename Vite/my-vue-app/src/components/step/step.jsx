import { defineComponent, ref } from 'vue'
import './step.less'
export default defineComponent({
  setup(props, { slots, emit, attrs }) {
    return () => {
      return (
        <div className="vant-stpe">
          <div className="vant-stpes-item">{slots.default?.()}</div>
          <div className="van-step__circle-container">
            <i className="vant-iconfont iconfont icon-success"></i>
          </div>
          <div className="van-step__line"></div>
        </div>
      )
    }
  }
})
