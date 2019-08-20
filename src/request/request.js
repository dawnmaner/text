import axios from 'axios'
import qs from 'qs'

const server = axios.create({
    timeout: 5000  //ms
})

// 请求前拦截(请求还没有发出去)
server.interceptors.request.use(config => {
    console.log(config)
    const token = localStorage.getItem('token')
        if (config.method === 'post' || config.method === 'put') {
            // {"username":"admin","password":"1"} ==> username=admin&password=1
            // headers Content-type json ===> form-data
            if (token) {
                config.data = config.data || {}
                config.data.token = token
            }
            config.data = qs.stringify(config.data, {arrayFormat:'repeat',allowDots:true})
        } else if (config.method === 'delete' || config.method === 'get') {
            if (token) {
                config.params = config.params || {}
                config.params.token = token
            }
    }
    return config
}, error => {
    return Promise.reject(error)
})

// 请求返回结果后拦截
server.interceptors.response.use(result => {
    return result.data
}, error => {
    return Promise.reject(error)
})

export default server