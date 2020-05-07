<template>
  <div class="date-picker-cantainav">
    <g-popover position="bottom">
      <g-input class="input__inner" readonly="" placeholder="请选择日期" />
      <template slot="content">
        <div class="date-pick-nav">
          <span @click="leftClickBig"><g-icon name="zuozuo"></g-icon></span>
          <span @click="leftClick"><g-icon name="left"></g-icon></span>
          <span>
            <span @click="yearStatus">{{ display.year }}年</span>
            <span @click="monthStatus">{{ display.month }}月</span>
          </span>
          <span @click="rightClick"><g-icon name="right"></g-icon></span>
          <span @click="rightClickBig"><g-icon name="youyou"></g-icon></span>
        </div>
        <div class="dete-pick-line"></div>
        <div class="date-pick-week" v-if="mode === 'day'">
          <span v-for="(i, index) in [1, 2, 3, 4, 5, 6, 0]" :key="index">
            {{ weekdats[i] }}
          </span>
        </div>
        <div class="date-pick-content">
          <template v-if="mode === 'day'">
            <div
              class="date-pick-row"
              v-for="(i, index) in helper.range(1, 7)"
              :key="index"
            >
              <span
                :class="[
                  'date-pick-col',
                  { 'date-pcik-cell': isCurrentMonth(getVisibleDay(i, j)) },
                ]"
                v-for="(j, index) in helper.range(1, 8)"
                :key="index"
                >{{ visibleDays[(i - 1) * 7 + j - 1].getDate() }}
              </span>
            </div>
          </template>
          <template v-else-if="mode === 'year'">
            <div class="year">
              <span
                v-for="(i, index) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
                :key="index"
              >
                {{ monthArr[i] }}月
              </span>
            </div>
          </template>
          <template v-else-if="mode === 'month'">
            <div class="year">
              <span
                v-for="(i, index) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
                :key="index"
              >
                {{ monthArr[i] }}月
              </span>
            </div>
          </template>
        </div>
        <div class="date-pick-actions">
          <button>清除</button>
        </div>
        <div></div>
      </template>
    </g-popover>
  </div>
</template>

<script>
import GInput from '@/input.vue'
import GIcon from '@/icon/icon.vue'
import GPopover from '@/popover/popover.vue'
import helper from './helper.js'
export default {
  components: { GInput, GPopover, GIcon },
  data() {
    return {
      value: new Date(),
      mode: 'day',
      helper,
      weekdats: ['日', '一', '二', '三', '四', '五', '六'],
      monthArr: [
        '一',
        '二',
        '三',
        '四',
        '五',
        '六',
        '七',
        '八',
        '九',
        '十',
        '十一',
        '十二',
      ],
      display: {
        year: null,
        month: null,
      },
    }
  },
  created() {
    this.getDisplay()
  },
  methods: {
    rightClickBig() {
      this.display.year++
    },
    rightClick() {
      this.display.month++
      if (this.display.month === 12) {
        this.display.month = 1
        this.display.year++
      }
    },
    leftClickBig() {
      this.display.year--
    },
    leftClick() {
      this.display.month--
      if (this.display.month === 0) {
        this.display.month = 12
        this.display.year--
      }
    },
    getDisplay() {
      this.display.year = helper.getYearMonthDate(this.value)[0]
      this.display.month = helper.getYearMonthDate(this.value)[1]
    },
    yearStatus() {
      this.mode = 'year'
    },
    monthStatus() {
      this.mode = 'month'
    },
    getVisibleDay(row, col) {
      return this.visibleDays[(row - 1) * 7 + col - 1]
    },
    isCurrentMonth(date) {
      let [year1, month1] = helper.getYearMonthDate(date)
      return year1 === this.display.year && month1 === this.display.month
    },
  },
  computed: {
    visibleDays() {
      let date = new Date(this.display.year, this.display.month, 1)
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
.date-pick-week,
.date-pick-nav,
.date-pick-row {
  display: flex;
  justify-content: space-between;
  margin: 5px 0px;
  align-items: center;
  padding: 0 5px;
  cursor: pointer;
  .date-pick-col {
    margin: 0px 5px;
    width: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #bbb;
  }
  .date-pcik-cell {
    color: #000;
  }
}
.date-pick-week,
.date-pick-nav {
  height: 30px;
}
.date-pick-content {
  width: 224px;
  height: 170px;
  .year {
    span {
      width: 55px;
      display: inline-block;
      text-align: center;
      height: 50px;
      line-height: 36px;
      color: #606266;
      margin: 0 auto;
      cursor: pointer;
      border-radius: 18px;
    }
  }
}
.date-pick-row {
  padding: 0;
}
.dete-pick-line {
  height: 1px;
  width: 100%;
  background-color: #bbb;
}
</style>
