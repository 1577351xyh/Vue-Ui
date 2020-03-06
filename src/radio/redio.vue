<template>
  <div class="gulu-redio" @click="optionChange">
    <span class="redio-inner" :class="{ active }"></span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    active() {
      return this.$parent.active.indexOf(this.name) > -1 ? true : false
    }
  },
  methods: {
    optionChange() {
      this.$parent.childChange(this.name)
      
    }
  }
}
</script>
<style lang="less" scope>
.gulu-redio {
  display: flex;
  align-items: center;
  margin-right: 8px;
}
.redio-inner {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #bbb;
  margin-right: 6px;
  display: block;
}
.active {
  border-color: #409eff;
  background: #409eff;
  position: relative;
}
.active::after {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #fff;
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease-in;
}
</style>
