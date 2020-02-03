<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: '',
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  created() {
    this.eventBus.$on('update:selected', name => {
      if (name === this.name) {
        console.log('pane我被选中' + this.name)
        this.active = true
      } else {
        console.log(this.name + 'pane没被选中')
        this.active = false
      }
    })
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  }
}
</script>

<style scoped lang="less">
.tabs-pane {
  padding: 10px;
}
</style>
