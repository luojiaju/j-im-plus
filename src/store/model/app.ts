// auth.js
import { Theme } from '@/enums/theme'
import { defineStore, acceptHMRUpdate } from 'pinia'


export const useApp = defineStore('app', () => {
    const theme = ref<Theme>()
    const menuActive = ref("home")
    const menu_layout_active=ref("@me")
    const menu_layout_active_path=ref("/layout/private/panel/@me/atme")
    const menu_layout_chat_active=ref("atme")
    const menu_layout_current_channel_active=ref("1")

  
    return {
        theme,
        menuActive,
        menu_layout_active,
        menu_layout_active_path,
        menu_layout_chat_active,
        menu_layout_current_channel_active,

    }
}, {
    persist: true,
})



// 确保传递正确的 store 声明，本例中为 `useAuth`
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useApp, import.meta.hot))
}