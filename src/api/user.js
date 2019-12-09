import axios from './server.js'

export function getAllUsers (params) {
  return new Promise((resolve, reject) => {
    axios.post('/person/selectByPage', params).then(data => {
      resolve(data)
    })
  })
}

export function selectUser (params) {
  return new Promise((resolve, reject) => {
    axios.post('/person/selectByUserName', params).then(data => {
      resolve(data)
    })
  })
}

export function getUsersNumber (params) {
  return new Promise((resolve, reject) => {
    axios.post('/person/selectNumberAll', params).then(data => {
      resolve(data)
    })
  })
}

// 查询所有一级部门
export function getFirDeps (params) {
  return new Promise((resolve, reject) => {
    axios.post('/dept/getDeptOne', params).then(data => {
      resolve(data)
    })
  })
}

// 获取所有部门 /dept/getNodeTree
export function getAllDeps (params) {
  return new Promise((resolve, reject) => {
    axios.post('/dept/getNodeTree', params).then(data => {
      resolve(data)
    })
  })
}

// 获取所有角色
export function getAllRoles (params) {
  return new Promise((resolve, reject) => {
    axios.post('/role/select', params).then(data => {
      resolve(data)
    })
  })
}

// 新增部门
export function addFirDep (params) {
  return new Promise((resolve, reject) => {
    axios.post('/dept/addDeptOne', params).then(data => {
      resolve(data)
    })
  })
}

// 新增二级部门
export function addSecDep (params) {
  return new Promise((resolve, reject) => {
    axios.post('/dept/addDeptTwo', params).then(data => {
      resolve(data)
    })
  })
}

// 新增角色
export function addRole (params) {
  return new Promise((resolve, reject) => {
    axios.post('/role/insert', params).then(data => {
      resolve(data)
    })
  })
}

// 删除角色
export function delRole (params) {
  return new Promise((resolve, reject) => {
    axios.post('/role/delete', params).then(data => {
      resolve(data)
    })
  })
}

// 删除一级部门
export function delFirDep (params) {
  return new Promise((resolve, reject) => {
    axios.post('/dept/deleteDeptOneByName', params).then(data => {
      resolve(data)
    })
  })
}

// 删除二级部门
export function delSecDep (params) {
  return new Promise((resolve, reject) => {
    axios.post('/dept/deleteDeptTwoById', params).then(data => {
      resolve(data)
    })
  })
}