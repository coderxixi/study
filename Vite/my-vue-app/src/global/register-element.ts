import { App } from 'vue'
import 'element-plus/dist/index.css'
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
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElIcon,
  ElLoading
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
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElIcon,
  ElSubMenu,
  ElMenuItem,
  ElLoading
  
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
