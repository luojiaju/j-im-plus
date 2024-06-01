// auth.js
import { defineStore, acceptHMRUpdate } from 'pinia'


export const useAuth = defineStore('auth', ()=>{
  const count = ref(0)
  const token = ref('')
  const userinfo = ref({})

  return { count, token, userinfo }
},{
  persist: true,
})



// 确保传递正确的 store 声明，本例中为 `useAuth`
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}