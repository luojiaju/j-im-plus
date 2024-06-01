import {  useAuth} from "@/store/model/auth";
import { useApp} from "@/store/model/app";


// 统一导出useStore方法
export default function useStore() {
    return {
      authStore: useAuth(),
      appStore: useApp(),
    //   counter: useCounterStore(),
    }
  }