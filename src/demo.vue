<template>
  <div class="box">
    <g-select placeholder="请选择" v-model="value">
      <g-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></g-option>
    </g-select>
    <button @click="next">按钮</button>
  </div>
</template>

<script>
import GSteps from '@/steps/steps.vue'
import GStep from '@/steps/step.vue'

import GSelect from '@/selecte/select.vue'
import GOption from '@/selecte/option.vue'
export default {
  name: '',
  data() {
    return {
      active: 0,
      value: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
        {
          value: '选项6',
          label: '北京烤鸭',
        },
        {
          value: '选项7',
          label: '北京烤鸭',
        },
        {
          value: '选项8',
          label: '北京烤鸭',
        },
        {
          value: '选项9',
          label: '北京烤鸭',
        },
        {
          value: '选项10',
          label: '北京烤鸭',
        },
      ],
    }
  },
  methods: {
    next() {
      console.log(this.value)
      // if (this.active++ > 2) this.active = 0
    },
  },
  components: {
    GSteps,
    GStep,
    GSelect,
    GOption,
  },
}
</script>

<style lang="less" scoped>
.box {
  width: 600px;
}
</style>
