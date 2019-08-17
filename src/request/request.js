import axios from 'axios'
//创建一个axios实例
const server=axios.create({
    timeout:5000 //ms请求超时时间
})
// 请求拦截器
server.interceptors.request.use(
config=>{return config},error=>{return Promise.reject(error)})
// 请求结果返回拦截器
server.interceptors.response.use(
result=>{return result},error=>{return Promise.reject(error)})
export default server