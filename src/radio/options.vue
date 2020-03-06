<template>
  <div class="gulu-redio">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    default: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.active.push(this.default)
  },
  methods: {
    childChange(name) {
      this.active = []
      this.active.push(name)
      this.$emit('update:default', this.active[0])
    }
  },
  data() {
    return {
      active: []
    }
  }
}
</script>
<style lang="less" scope>
.gulu-redio {
  display: inline-flex;
}
</style>
