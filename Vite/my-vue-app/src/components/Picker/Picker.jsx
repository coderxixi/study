import { defineComponent, reactive } from 'vue'
import './picker.less'
export default defineComponent({
  props: {
    isactive: {
      type: Boolean,
      default: false
    }
  },
  emit: ['closeFn'],
  setup(props, { emit, attrs, slots }) {
    const selector = reactive(['美国', '中国', '巴西', '日本', '美国', '中国', '巴西', '日本'])
    const state = reactive({
      index: 1,
      offset: 0,
      duration: 300
    })

    const closeFn = () => {
      emit('closeFn', false)
      console.log('8989898', slots)
    }
    const qure = () => {
      emit('closeFn', false)
    }
    const MouseMove = () => {
      console.log('手指按下')
    }
    const tMove = () => {
      console.log('手指移动')
    }
    const tEnd = () => {
      console.log('手指抬起')
    }
    return () => {
      const wrapperStyle = {
        transform: `translate3d(0, ${state.offset}px, 0)`,
        transitionDuration: `${state.duration}ms`,
        transitionProperty: state.duration ? 'all' : 'none'
      }
      return (
        <div className="contentbox">
          <div className={`${props.isactive ? 'picker-popup active' : 'picker-popup'}`} onClick={closeFn}></div>
          <div className="picker-conter">
            {/* {slots.default()} */}
            <div className="contern">
              <div className="contern-top">
                <div onClick={qure}>取消</div>
                <div onClick={qure}>确认</div>
              </div>
              <div
                className="contentitem-box"
                onTouchstart={MouseMove}
                onTouchmove={tMove}
                onTouchend={tEnd}
                style={wrapperStyle}
              >
                {selector.map((item, index) => {
                  return (
                    <div className="contentitem-box-item" key={index}>
                      {item}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})
