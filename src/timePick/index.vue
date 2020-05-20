<template>
  <div class="time-picker-cantainav">
    <div @click="open">
      <g-input
        class="input__inner"
        v-bind="$attrs"
        v-model="values"
        readonly=""
      />
    </div>

    <div
      class="time-wrapper"
      :class="{ defaultClass, reageClass }"
      v-show="isShwo"
    >
      <div class="line" v-if="reageClass"></div>
      <div class="line line-bottom" v-if="reageClass"></div>
      <div v-if="reageClass" class="reageClass-wrapper">
        <ul v-for="(item, indexs) in reage" :key="indexs" :ref="item.ref">
          <li
            v-for="(i, index) in item.arr"
            :class="{ liCurrent: liCurrent, 'no-disabled': i.disabled }"
            @click="itemClick(index)"
            :key="index"
          >
            {{ i.item }}
          </li>
        </ul>
      </div>
      <ul ref="wrapper" v-else>
        <li
          v-for="(i, index) in arr"
          :class="{ current: currentIndex === index }"
          @click="itemClick(index)"
          :key="index"
        >
          {{ i }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import GInput from '../input.vue'
import ClickOutside from '../nav/click-outside'

export default {
  components: { GInput },
  props: {
    value: {
      type: String,
      default: '',
    },
    pickerOptions: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      reage: [
        { ref: 'reage1', arr: {}, length: 24 },
        { ref: 'reage2', arr: {}, length: 60 },
        { ref: 'reage3', arr: {}, length: 60 },
      ],
      isShwo: false,
      values: '',
      valuesData: {
        huosr: '00',
        minutes: '00',
        scones: '00',
      },
      currentIndex: undefined,
      demo: [],
      liCurrent: false,
      disabled: {},
      huors: [],
    }
  },
  created() {
    if (this.reageClass) {
      this.reage.forEach((vm) => {
        vm.arr = this.initArr(vm.length)
      })
      this.propRangeInit()
    }
  },
  computed: {
    defaultClass() {
      if (!this.pickerOptions.selectableRange) {
        return true
      }
    },
    reageClass() {
      if (this.pickerOptions.selectableRange) {
        return true
      }
    },
    arr() {
      if (this.defaultClass) {
        return this.defaultArr()
      } else {
        return this.reageArr()
      }
    },
  },
  methods: {
    propRangeInit() {
      let arr = this.pickerOptions.selectableRange.trim().split('-')
      this.disabled.start = parseInt(arr[0].split(':')[0]) * 60
      this.disabled.end = parseInt(arr[1].split(':')[0]) * 60
      this.disabled.startMinutes = parseInt(arr[0].split(':')[1])
      this.disabled.endMinutes = parseInt(arr[1].split(':')[1])
      let str0 = parseInt(arr[0].split(':')[0])
      let str1 = parseInt(arr[1].split(':')[0])
      for (let i = str0; i <= str1; i++) {
        this.huors.push(i)
      }
      this.reage[0].arr.forEach((el) => {
        if (this.huors.indexOf(parseInt(el.item)) > -1) {
          el.disabled = true
        }
      })
      this.reage[2].arr.forEach((el) => {
        el.disabled = true
      })
    },
    disabledResult(h) {
      if (this.pickerOptions.selectableRange) {
        if (this.huors.indexOf(parseInt(h)) > -1) {
          let index = this.huors.indexOf(parseInt(h))
          this.reage[1].arr.forEach((vm, indexs, arr) => {
            vm.disabled = true
            if (index === 0) {
              // this.disabled.start之前
              for (let i = 0; i < this.disabled.startMinutes; i++) {
                const element = this.disabled.startMinutes[i]
                arr[i].disabled = false
              }
            } else if (index === this.huors.length - 1) {
              // this.disabled.end之后
              for (let i = this.disabled.endMinutes; i < arr.length; i++) {
                const element = this.disabled.endMinutes[i]
                arr[i].disabled = false
              }
            }
          })
        } else {
          this.reage[1].arr.forEach((vm) => {
            vm.disabled = false
          })
        }
      }
    },
    initArr(length) {
      let arr = []
      for (let i = 0; i < length; i++) {
        let str = i
        if (i.toString().length < 2) {
          str = '0' + i
        }
        arr.push({
          item: str,
          disabled: false,
        })
      }
      return arr
    },
    open() {
      this.isShwo = !this.isShwo
      if (this.pickerOptions.selectableRange) {
        this.$nextTick(() => {
          this.reage.forEach((el) => {
            this.forInit(this.computedStyle(el.ref))
            this.scroll(el.ref)
          })
        })
      }
    },
    reageArr() {
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      return arr
    },
    getMinute(str) {
      let strs = str.split(':')
      let max = Number(strs[0]) * 60 + Number(strs[1])
      return max
    },
    defaultArr() {
      let stepMax = this.getMinute(this.pickerOptions.step)
      let maxMinutes = this.getMinute(this.pickerOptions.end)
      let mixMinutes = this.getMinute(this.pickerOptions.start)
      let maxStep = maxMinutes - mixMinutes
      let arr = []
      let minutes = 0
      for (let i = 0; i < maxStep / stepMax; i++) {
        minutes = minutes + stepMax
        let newMinutes = this.toMinute(minutes + mixMinutes)
        arr.push(newMinutes)
      }
      return arr
    },
    itemClick(i) {
      this.currentIndex = i
      this.values = this.arr[i]
      this.$emit('input', this.arr[i])
    },
    computedStyle(refs) {
      let div = this.$refs[refs][0]
      let divChildren = div.getElementsByTagName('li')
      let liHeight = divChildren[0].getBoundingClientRect().height
      const { top, bottom } = div.getBoundingClientRect()
      let style = getComputedStyle(div)
      let height = parseInt(style.getPropertyValue('height'))
      return { top: top + 100, liHeight, height, div, divChildren, refs }
    },
    forInit(data) {
      const { divChildren, liTop, top, height, liHeight } = data
      Array.from(divChildren).forEach((el) => {
        let liTop = el.getBoundingClientRect().top
        el.classList.remove('liCurrent')
        if (
          top - height / 2 <= liTop &&
          liTop <= top + (height - 1 - liHeight / 2)
        ) {
          el.classList.add('liCurrent')
        }
      })
    },
    scroll(ref) {
      let data = this.computedStyle(ref)
      data.div.addEventListener('scroll', (ref) => {
        this.forInit(data)
        this.rusultValue(data)
      })
    },
    rusultValue(data) {
      this.reage.forEach((vm, index) => {
        let div = this.$refs[vm.ref][0]
        let li = div.getElementsByTagName('li')
        if (index === 0) {
          Array.from(li).forEach((vm) => {
            if (
              vm.classList.value === 'liCurrent' ||
              vm.classList.value === 'no-disabled liCurrent'
            ) {
              if (this.huors.indexOf(parseInt(vm.innerText)) > -1) {
                this.valuesData.huosr = vm.innerText
              }
              this.disabledResult(vm.innerText)
            }
          })
        } else if (index === 1) {
          Array.from(li).forEach((vm) => {
            if (vm.classList.value === 'no-disabled liCurrent') {
              this.valuesData.minutes = vm.innerText
            }
          })
        } else {
          Array.from(li).forEach((vm) => {
            if (
              vm.classList.value === 'liCurrent' ||
              vm.classList.value === 'no-disabled liCurrent'
            ) {
              this.valuesData.scones = vm.innerText
            }
          })
        }
      })
      let { huosr, scones, minutes } = this.valuesData
      this.values = huosr + ':' + minutes + ':' + scones
      this.$emit('input', this.values)
    },
    toMinute(minutes) {
      let houst = Math.floor(minutes / 60)
      let min = minutes % 60
      if (houst.toString().length < 2) {
        houst = '0' + houst
      }
      if (min.toString().length < 2) {
        min = min + '0'
      }
      return houst + ':' + min
    },
  },
}
</script>
<style lang="less" scope>
.time-picker-cantainav {
  width: 180px;
  position: relative;
  .input__inner {
    width: 100%;
    input {
      width: 100%;
      cursor: pointer !important;
    }
  }
  .wrapper {
    width: 100%;
    input {
      color: #000;
    }
  }
  .time-wrapper {
    z-index: 9;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    left: 0;
    top: 105%;
    display: flex;
    color: #606266;
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 4px;
    line-height: 30px;
    padding: 10px;
    ul {
      width: 100%;
      height: 200px;
      text-align: center;
      overflow-y: auto;
      padding: 0;
      margin: 0;
      .liCurrent {
        font-size: 16px;
        color: #409eff;
      }
      li {
        width: 100%;
        line-height: 35px;
        text-align: left;
        list-style: none;
        &:hover {
          background-color: #f5f7fa;
          font-weight: 700;
          cursor: pointer;
        }
      }
      .current {
        color: #409eff;
        font-weight: 700;
      }
    }
  }
  .reageClass {
    position: relative;
    .reageClass-wrapper {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .line {
      width: 80%;
      position: absolute;
      top: 43%;
      transform: translateY(-50%);
      height: 1px;
      background-color: #606266;
    }
    ul {
      height: 35px;
      padding-top: 100px;
      padding-bottom: 100px;
      cursor: pointer;
      .liCurrent {
        font-size: 16px;
        color: #c0c4cc;
      }
      .no-disabled {
        color: #606266;
        cursor: no-drop;
      }
      li {
        text-align: center;
        color: #c0c4cc;
        cursor: auto;
      }
    }
    .line-bottom {
      top: 57%;
    }
  }
}
</style>
