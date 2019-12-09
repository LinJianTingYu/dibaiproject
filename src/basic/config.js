export function getPagination (total, pageSize, callback) {
  return {
    // current: 2,
    pageSize: pageSize || 8,
    total, // 
    // onShowSizeChange (a, b) {
    //   console.log(a, b)
    // },
    onChange (page, pageSize) {
      callback({ page: page })
    }
  }
}