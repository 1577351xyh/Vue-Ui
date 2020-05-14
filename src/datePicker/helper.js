export default {
  // 月的第一天
  firstDayMonth(date) {
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month, 1)
  },
  // 月的最后一天
  lastDayMonth(date) {
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month + 1, 0)
  },
  range(begin, end) {
    let arr = []
    for (let i = begin; i < end; i++) {
      arr.push(i)
    }
    return arr
  },
  getYearMonthDate,
}

function getYearMonthDate(date) {
  let year = date.getFullYear(date)
  let month = date.getMonth(date)
  let day = date.getDate(date)
  return [year, month, day]
}