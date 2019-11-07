export function getPagination (data, pageSize) {
  return {
    // current: 2,
    pageSize: pageSize || 8,
    total: data.length, // 
    onShowSizeChange (a, b) {
      console.log(a, b)
    }
  }
}