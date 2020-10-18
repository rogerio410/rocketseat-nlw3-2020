import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.0.104:3333/', // if IOS jsut http://localhost:333, android-emulador: adb reverse tcp:3333 tcp:3333 
})

export default api