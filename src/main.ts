import { createApp } from "vue";
import App from "./App.vue";
import '@/index.css'

// router
import router from "@/router/index"

// pinia
import { createPinia } from "pinia";

// quasar
import { Dialog, Loading, Notify, Quasar, } from 'quasar'
import 'quasar/src/css/index.sass'

import quasarLang from 'quasar/lang/zh-CN'
import quasarIconSet from 'quasar/icon-set/svg-material-icons'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'



import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(router)
    .use(pinia)
    .use(Quasar, {
        plugins: {
            Dialog,
            Notify,
            Loading,
        },
        lang: quasarLang,
        iconSet: quasarIconSet,
    })

    import useStore from '@/store';

const { appStore } = useStore()

// 计算属性在其他组件或者模板中请使用：$currTheme.value
app.config.globalProperties.$currTheme = computed(()=>`theme-${ appStore.theme}`)
app.config.globalProperties.$appStore = appStore
app  .mount("#app");
