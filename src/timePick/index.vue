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
            :class="{ liCurrent: liCurrent, disabled: disabled(i, indexs) }"
            @click="itemClick(index)"
            :key="index"
          >
            {{ i }}
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

    <!-- <div class="time-wrapper" :class="reageClass" v-if="reageClass">
         <div class="line" v-if="reageClass"></div>
      <div class="line line-bottom" v-if="reageClass"></div>
      <ul ref="wrapper">
        <li v-for="(s, index) in demo" :key="index" :class="{}">
          {{ s }}
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script>
import GInput from '@/input.vue'
import ClickOutside from '@/nav/click-outside'

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
        { ref: 'reage1', arr: [], length: 24 },
        { ref: 'reage2', arr: [], length: 60 },
        { ref: 'reage3', arr: [], length: 60 },
      ],
      isShwo: false,
      values: '',
      currentIndex: undefined,
      demo: [],
      liCurrent: false,
    }
  },
  created() {
    this.reage.forEach((vm) => {
      vm.arr = this.initArr(vm.length)
    })
    if (this.reageClass) {
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
      let start = parseInt(arr[0].split(':')[0]) * 60
      let end = parseInt(arr[1].split(':')[0]) * 60
      let startMinutes = parseInt(arr[0].split(':')[1])
      let endMinutes = parseInt(arr[1].split(':')[1])
      return { end, start, startMinutes, endMinutes }
    },
    disabled(i, index) {
      const { end, start, startMinutes, endMinutes } = this.propRangeInit()
      console.log(startMinutes)
      if (this.pickerOptions.selectableRange) {
        let time = parseInt(i)
        if (index === 0) {
          if (start <= time * 60 && time * 60 <= end) {
            return false
          }
          return true
        } else if (index === 1) {
          return true
        } else {
          return false
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
        arr.push(str)
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
      return { top: top + 100, liHeight, height, div, divChildren }
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
      data.div.addEventListener('scroll', () => {
        this.forInit(data)
        this.rusultValue()
      })
    },
    rusultValue() {
      let div = this.$refs.reage1[0]
      let li = div.getElementsByTagName('li')
      Array.from(li).forEach((vm) => {
        if (vm.classList.value === 'liCurrent') {
          console.log(vm.innerText)
        }
      })
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
        color: #606266;
      }
      .disabled {
        color: #c0c4cc;
        cursor: no-drop;
      }
      li {
        text-align: center;
        color: #606266;
        cursor: auto;
      }
    }
    .line-bottom {
      top: 57%;
    }
  }
}
</style>
