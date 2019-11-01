export function getPagination (data) {
  return {
    // current: 2,
    pageSize: 8,
    total: data.length, // 
    onShowSizeChange (a, b) {
      console.log(a, b)
    }
  }
}