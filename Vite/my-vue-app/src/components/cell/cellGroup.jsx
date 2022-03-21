import { defineComponent } from 'vue'
import './cellgroup'
export default defineComponent({
  name: 'cellGroup',
  setup(props, { attrs, emit, slots }) {
    const renderTitle = () => {}
    const renderGroup = () => {
      ;<div className="xixi-title">{slots.title ? slots.title() : props.title}</div>
    }
    return () => {
      if (props.title || slots.title) {
        return (
          <>
            {renderTitle()}
            {renderGroup()}
          </>
        )
      }
      return renderGroup()
    }
  }
})
