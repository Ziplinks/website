// core
import { createApp } from "vue"
import App from "@/App.vue"
import store from "@/store"
import router from "@/router"
import "@/router/permission"
// load
import { loadSvg } from "@/icons"
import { loadPlugins } from "@/plugins"
import { loadDirectives } from "@/directives"
// import allComponent from "@/components"

// css
import "uno.css"
import "normalize.css"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "vxe-table/lib/style.css"
import "vxe-table-plugin-element/dist/style.css"
import "@/styles/index.scss"

const app = createApp(App)

/** 加载插件 */
loadPlugins(app)
/** 加载全局 SVG */
/** 方式1 */
loadSvg(app)
/** 方式2 测试一下也是可用的 */
// app.use(allComponent)
/** 加载自定义指令 */
loadDirectives(app)

app.use(store).use(router)
router.isReady().then(() => {
  app.mount("#app")
})
