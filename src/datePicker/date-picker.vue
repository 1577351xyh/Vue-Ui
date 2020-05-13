<template>
  <div class="date-picker-cantainav">
    <g-popover position="bottom" ref="popover">
      <g-input
        class="input__inner"
        v-model="dateValue"
        readonly=""
        placeholder="选择日期时间"
      />
      <template slot="content">
        <div class="date-pick-nav">
          <span @click="leftClickBig"><g-icon name="zuozuo"></g-icon></span>
          <span v-if="mode !== 'year'" @click="leftClick"
            ><g-icon name="left"></g-icon
          ></span>
          <span>
            <span @click="yearStatus">{{ display.year }}年</span>
            <span @click="monthStatus">{{ display.month + 1 }}月</span>
          </span>
          <span v-if="mode !== 'year'" @click="rightClick"
            ><g-icon name="right"></g-icon
          ></span>
          <span @click="rightClickBig"><g-icon name="youyou"></g-icon></span>
        </div>
        <div class="dete-pick-line"></div>
        <div class="date-pick-week" v-if="mode === 'day'">
          <span v-for="(i, index) in [1, 2, 3, 4, 5, 6, 0]" :key="index">
            {{ weekdats[i] }}
          </span>
        </div>
        <div class="date-pick-content">
          <template v-if="mode === 'year'">
            <div class="year">
              <span
                @click.stop="setYear(i)"
                v-for="(i, index) in getYearArr"
                :key="index"
                :class="{ monthCurrent: getSelectedYear(i) }"
              >
                {{ i }}年
              </span>
            </div>
          </template>
          <template v-else-if="mode === 'month'">
            <div class="year">
              <span
                v-for="(i, index) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
                :key="index"
                @click.stop="setMonth(i)"
                :class="{ monthCurrent: getSelectedMonth(i) }"
              >
                {{ monthArr[i] }}月
              </span>
            </div>
          </template>
          <template v-else>
            <div
              class="date-pick-row"
              v-for="(i, index) in helper.range(1, 7)"
              :key="index"
            >
              <span
                :class="[
                  'date-pick-col',
                  { 'date-pcik-cell': isCurrentMonth(getVisibleDay(i, j)) },
                  {
                    dayCurrent:
                      getSelectedDay(i, j) &&
                      isCurrentMonth(getVisibleDay(i, j)),
                  },
                ]"
                @click="setDay(i, j)"
                v-for="(j, index) in helper.range(1, 8)"
                :key="index"
                >{{ visibleDays[(i - 1) * 7 + j - 1].getDate() }}
              </span>
            </div>
          </template>
        </div>
        <div class="date-pick-actions">
          <g-button>清除</g-button>
          <g-button style="margin-left:15px;" @click="isPlain">确定</g-button>
        </div>
        <div></div>
      </template>
    </g-popover>
  </div>
</template>

<script>
import GInput from '@/input.vue'
import GButton from '@/botton/button.vue'
import GIcon from '@/icon/icon.vue'
import GPopover from '@/popover/popover.vue'
import helper from './helper.js'
export default {
  components: { GInput, GPopover, GIcon, GButton },
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
      firstClick: false,
      display: {
        year: null,
        month: null,
        day: null,
        hours: null,
        minutes: null,
        seconds: null,
      },
      obj: {
        obj2: {
          a: '1',
          b: {
            a: 12,
            c: 33,
            d: { a: 1, b: 2 },
          },
        },
        fn() {
          console.log(3)
        },
      },
    }
  },
  created() {
    this.getDisplay()
  },
  methods: {
    setDay(i, j) {
      this.firstClick = true
      const [year, month, day] = helper.getYearMonthDate(
        this.getVisibleDay(i, j)
      )
      this.display.day = day
    },
    isPlain() {
      this.firstClick = true
      this.$refs.popover.visible = false
    },
    getSelectedDay(i, j) {
      const [year, month, day] = helper.getYearMonthDate(
        this.getVisibleDay(i, j)
      )
      if (day === this.display.day) return true
    },
    getSelectedMonth(i) {
      if (i === this.display.month) return true
    },
    getSelectedYear(i) {
      if (i === this.display.year) return true
    },
    setMonth(i) {
      this.display.month = i
      this.mode = 'day'
    },
    setYear(i) {
      this.display.year = i
      this.mode = 'day'
    },
    rightClickBig() {
      this.display.year++
    },
    rightClick() {
      this.display.month++
      if (this.display.month >= 12 && this.mode === 'day') {
        this.display.year++
        this.display.month = 0
      } else if (this.display.month >= 12 && this.mode === 'month') {
        this.display.month = 0
      }
    },
    leftClickBig() {
      this.display.year--
    },
    leftClick() {
      if (this.display.month <= 0 && this.mode === 'day') {
        this.display.month = 12
        this.display.year--
      } else if (this.display.month <= 0 && this.mode === 'month') {
        this.display.month = 12
      }
      this.display.month--
    },
    getDisplay() {
      const [
        year,
        month,
        day,
        hours,
        minutes,
        seconds,
      ] = helper.getYearMonthDate(this.value)
      this.display.year = year
      this.display.month = month
      this.display.day = day
      this.display.hours = hours
      this.display.minutes = minutes
      this.display.seconds = seconds
    },
    yearStatus() {
      this.mode = 'year'
    },
    monthStatus() {
      if (this.mode === 'month') {
        this.mode = 'day'
        return
      }
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
    dateValue() {
      let { year, month, day, hours, minutes, seconds } = this.display
      if (!this.firstClick) {
        return ''
      }
      month = month + 1
      if (month < 10) {
        month = '0' + month
      }
      if (day < 10) {
        day = '0' + day
      }
      return `${year}-${month}-${day}`
    },
    getYearArr() {
      let arr = []
      let num = this.display.year.toString().substring(0, 3)
      arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((vm) => {
        return Number(num + vm.toString())
      })
      return arr
    },
    visibleDays() {
      let date = new Date(
        Number(this.display.year),
        Number(this.display.month),
        1
      )
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
      //  let n = first.getDay()
      // let array = []
      // let x = first - (n === 0 ? 6 : n - 1) * 3600 * 24 * 1000
      // for (let i = 0; i < 42; i++) {
      //   array.push(new Date(x + i * 3600 * 24 * 1000))
      // }
      // return array
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
  .wrapper > input {
    color: #000;
  }
}
.date-pick-actions {
  display: flex;
  justify-content: flex-end;
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
    .monthCurrent {
      color: #409eff;
    }
  }
  .dayCurrent {
    color: #409eff;
    border: 1px solid #409eff;
    height: 22px;
    border-radius: 4px;
    box-sizing: border-box;
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
