<template>
  <div class="gulu-option" @click="selecteItem">
    {{ label }}
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: [String, Number],
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {}
  },
  inject: ['eventBus'],
  methods: {
    selecteItem() {
      this.eventBus.$emit('update:selectedValue', {
        value: this.value,
        label: this.label,
      })
    },
  },
}
</script>
<style lang="less" scope>
.gulu-option {
  font-size: 12px;
  padding: 0 10px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606266;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
