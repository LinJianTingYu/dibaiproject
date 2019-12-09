import axios from './server.js'

// 获取所有的账号
export function getAllAccounts (params) {
  return new Promise((resolve, reject) => {
    axios.post('/admin/selectInfo', params).then(data => {
      resolve(data)
    })
  })
}

// 查询人员信息/person/selectAllByPhone
export function selectPerson (params) {
  return new Promise((resolve, reject) => {
    axios.post('/person/selectAllByPhone', params).then(data => {
      resolve(data)
    })
  })
}

// 添加账号
export function insertPerson (params) {
  return new Promise((resolve, reject) => {
    axios.post('/admin/insertInfo', params).then(data => {
      resolve(data)
    })
  })
}

// 删除账号
export function delPerson (params) {
  console.log(params)
  return new Promise((resolve, reject) => {
    axios.post('/admin/deleteInfo', params).then(data => {
      resolve(data)
    })
  })
}