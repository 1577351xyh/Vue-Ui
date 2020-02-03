<template>
  <div class="tabs-header" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  //注入eventbus
  inject: ['eventBus'],
  data() {
    return {}
  },
  mounted() {
    //监听selected事件
    this.eventBus.$on('update:selected', (item, vm) => {
      let { width, left } = vm.$el.getBoundingClientRect();
      let{left:left2} = this.$refs.head.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left-left2}px`
    })
  }
}
</script>

<style scoped lang="less">
.tabs-header {
  display: flex;
  min-height: 40px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid blue;
    transition: all 500ms;
  }
  .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>
