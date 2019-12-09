import axios from 'axios'
import { message } from 'antd'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000

// 获取loading容器
let loading = document.getElementById('ajaxLoading')

// 发起请求的拦截处理
axios.interceptors.request.use(config => {
  loading.style.display = 'block'
  return config
})

axios.interceptors.response.use(
  response => {
    // console.log(response)
    loading.style.display = 'none'
    return response.data
  },
  error => {
    loading.style.display = 'none'
    if (error.message.indexOf('timeout') > -1) {
      return message.error('服务器超时')
    }
    return message.error('服务器错误')
  }
)

export default axios