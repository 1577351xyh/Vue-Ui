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
    <!-- <g-cascader
      :selected.sync="selected"
      itemheight="'40px'"
      :source="arr"
    ></g-cascader> -->

    <!-- <g-date-picker
      :value.sync="value"
      placeholder="选择日期时间"
    ></g-date-picker> -->
    <g-steps :active="0">
      <g-step title="步骤1" description="小段文字"></g-step>
      <g-step title="步骤2" description="小段文字"></g-step>
      <g-step title="步骤3" description="小段文字"></g-step>
    </g-steps>
    <g-time-picker
      placeholder="选择时间"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
      v-model="value"
    ></g-time-picker>

    <g-time-picker
      placeholder="选择时间"
      :picker-options="{
        selectableRange: '10:00:00 - 20:30:00',
      }"
      v-model="value"
    ></g-time-picker>

    <button @click="next">x</button>
  </div>
</template>

<script>
import GSteps from '@/steps/steps.vue'
import GStep from '@/steps/step.vue'
import GSelect from '@/selecte/select.vue'
import GOption from '@/selecte/option.vue'
import GCascader from '@/cascader/cascader.vue'
import GDatePicker from '@/datePicker/date-picker.vue'
import GTimePicker from '@/timePick/index.vue'
// import GCascaderItem from '@/selecte/option.vue'

export default {
  name: '',
  data() {
    return {
      active: 0,
      value: '',
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
    },
  },
  components: {
    GSteps,
    GStep,
    GSelect,
    GOption,
    GCascader,
    GDatePicker,
    GTimePicker,
  },
}
</script>

<style lang="less" scoped>
.box {
  width: 600px;
}
</style>
