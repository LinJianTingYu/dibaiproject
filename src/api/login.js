import axios from './server.js'

export function login (params) {
  return new Promise((resolve, reject) => {
    axios.post('/admin/login', params).then(data => {
      resolve(data)
    })
  })
}