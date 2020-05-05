<template>
  <div class="date-picker-cantainav">
    <g-popover position="bottom">
      <g-input class="input__inner" readonly="" placeholder="请选择日期" />
      <template slot="content">
        <div class="date-pick-nav"></div>
        <div class="date-pick-week"></div>
        <div class="date-pick-content"></div>
        <div class="date-pick-actions"></div>
        <div></div>
      </template>
    </g-popover>
  </div>
</template>

<script>
import GInput from '@/input.vue'
import GPopover from '@/popover/popover.vue'
import helper from './helper'
export default {
  components: { GInput, GPopover },
  data() {
    return {
      value: new Date(),
    }
  },
  mounted() {
    console.log(this.visibleDays)
  },
  computed: {
    visibleDays() {
      let date = this.value
      let first = helper.firstDayMonth(date)
      let last = helper.lastDayMonth(date)
      // 把date 转为 2018 2 4
      let [year, month, day] = helper.getYearMonthDate(date)
      let array = []
      let array2 = []
      let array3 = []

      // 本月所有天
      for (let i = first.getDate(); i <= last.getDate(); i++) {
        array.push(new Date(year, month, i))
      }
      // 本月前面剩下的天数
      let n = first.getDate() === 0 ? 6 : first.getDay() - 1
      for (let i = 0; i < n; i++) {
        array2.push(new Date(year, month, -i))
      }
      // 翻转
      array2 = array2.reverse()
      // 本月后面剩下的天数
      let m = 43 - array.length - array2.length
      for (let i = 1; i <= m; i++) {
        array3.push(new Date(year, month + 1, i))
      }
      return [...array2, ...array, ...array3]
    },
  },
}
</script>

<style lang="less" scope>
.date-picker-cantainav {
  .input__inner {
    input {
      cursor: pointer !important;
    }
  }
}
</style>
