import { log } from 'console'
import Stomp from 'stompjs'

const client: any = null

const formState = ref({
    SERVICE: 'ws://websocket/15674/ws',
    USERNAME: 'admin',
    PASSWORD: '123456',
    topic: '/exchange/exchange_pushmsg/rk_pushmsg',
})

//连接成功时的回调 同时订阅频道
const onConnected = (frame: any) => {
    // const topic = ref('/vECU')
    console.log('连接成功')
    client.subscribe(formState.value.topic, responseCallback, onFailed)
}


//初始化mqtt客户端，并连接mqtt服务
const connect = () => {
    client = Stomp.client(formState.value.SERVICE)
    // 去除控制台的提示
    // client.debug = () => {}
    const headers = {
        login: formState.value.USERNAME,
        passcode: formState.value.PASSWORD,
    }
    client.connect(headers, onConnected, onFailed)
}
