<template>
  <div class="box">
    <!-- <g-select placeholder="请选择" v-model="value">
      <g-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></g-option>
    </g-select>

    <g-select placeholder="请选择" filterable v-model="value">
      <g-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></g-option>
    </g-select>

    <button @click="next">按钮</button> -->
    <g-cascader
      :selected.sync="selected"
      itemheight="'40px'"
      :source="arr"
    ></g-cascader>
  </div>
</template>

<script>
import GSteps from '@/steps/steps.vue'
import GStep from '@/steps/step.vue'
import GSelect from '@/selecte/select.vue'
import GOption from '@/selecte/option.vue'
import GCascader from '@/cascader/cascader.vue'
// import GCascaderItem from '@/selecte/option.vue'

export default {
  name: '',
  data() {
    return {
      active: 0,
      value: '',
      options: [
        {
          value: '选项1',
          label: '1',
        },
        {
          value: '选项2',
          label: '2',
        },
        {
          value: '选项3',
          label: '111',
        },
        {
          value: '选项4',
          label: '222',
        },
        {
          value: '选项5',
          label: '111',
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
      selected: [],
      arr: [
        {
          name: '汉洲',
          children: [{ name: '上城' }, { name: '上城2' }, { name: '上城3' }],
        },
        {
          name: '嘉兴',
          children: [{ name: '南湖' }, { name: '南湖1' }, { name: '南湖2' }],
        },
        {
          name: '福建',
          children: [
            {
              name: '福州',
              children: [{ name: '台江' }, { name: '仓山' }],
            },
          ],
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
    GCascader,
  },
}
</script>

<style lang="less" scoped>
.box {
  width: 600px;
}
</style>
