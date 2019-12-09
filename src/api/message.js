import axios from './server.js'

// 向app统一发送消息
export function sendMessage (params) {
  return new Promise((resolve, reject) => {
    axios.post('/dialogue/addAdminMessage', params).then(data => {
      resolve(data)
    })
  })
}

// 与员工对话
export function contactuser (params) {
  return new Promise((resolve, reject) => {
    axios.post('/dialogue/addAdminMessage', params).then(data => {
      resolve(data)
    })
  })
}

// 获取员工对话信息
export function getUserMessages (params) {
  return new Promise((resolve, reject) => {
    axios.post('/dialogue/selectAdminByPhone', params).then(data => {
      resolve(data)
    })
  })
}
