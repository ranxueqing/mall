import axios from 'axios'

export function request(config){
    // 创建axios 实例
    const instance = axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })
    // axios 拦截器
    instance.interceptors.request.use(config=>{
        // console.log(config)
        return config
    },err=>{
        console.log(err)
    })

    instance.interceptors.response.use(res=>{
        // console.log(res)
        return res.data  //拦截之后要将结果返回出去，否则后边会显示undefined
    },err=>{
        console.log(err)
    })

    return instance(config)
}