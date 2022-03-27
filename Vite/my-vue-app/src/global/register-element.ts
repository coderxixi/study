import { App } from 'vue'
// import 'element-plus/lib/dist/base.css'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
 
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
