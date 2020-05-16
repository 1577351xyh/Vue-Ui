<template>
  <div class="time-picker-cantainav">
    <div @click="isShwo = !isShwo">
      <g-input
        class="input__inner"
        v-bind="$attrs"
        v-model="values"
        readonly=""
      />
    </div>

    <div class="time-wrapper" v-if="isShwo">
      <ul ref="wrapper">
        <li
          v-for="(i, index) in arr"
          :class="{ current: currentIndex === i }"
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
import GInput from '@/input.vue'

export default {
  components: { GInput },
  props: {
    value: {
      type: String,
      default: '',
    },
    pickerOptions: {
      type: Object,
      default: () => {
        return {
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }
      },
    },
  },
  data() {
    return {
      isShwo: false,
      values: '',
      arr: [],
      currentIndex: undefined,
    }
  },
  created() {},
  methods: {
    itemClick(i) {
      this.currentIndex = i
      this.values = this.arr[i]
      this.$emit('input', this.arr[i])
    },
    scroll() {
      let div = this.$refs.wrapper
      div.addEventListener(
        'scroll',
        () => {
          console.log(div.scrollTop)
        },
        false
      )
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
    getMinutes() {
      let end = this.pickerOptions.end.split(':')
      let start = this.pickerOptions.start.split(':')
      let step = this.pickerOptions.step.split(':')[1]
      step = Number(step)
      let maxMinutes = Number(end[0]) * 60 + Number(end[1])
      let mixMinutes = Number(start[0]) * 60 + Number(start[1])
      let maxStep = maxMinutes - mixMinutes
      let arr = []
      let minutes = 0
      for (let i = 0; i < maxStep / step; i++) {
        minutes = minutes + step
        let newMinutes = this.toMinute(minutes + mixMinutes)
        arr.push(newMinutes)
      }
      return arr
    },
  },
  created() {
    this.arr = this.getMinutes()
  },
}
</script>
<style lang="less" scope>
.time-picker-cantainav {
  width: 144px;
  .input__inner {
    input {
      cursor: pointer !important;
    }
  }
  .wrapper > input {
    color: #000;
  }
  .time-wrapper {
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
      text-align: center;
      height: 200px;
      overflow-y: auto;
      padding: 0;
      margin: 0;
      li {
        width: 100%;
        line-height: 26px;
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
}
</style>
