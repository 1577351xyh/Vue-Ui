<template>
  <div class="box">
    <g-steps :active="active">
      <g-step title="步骤1"></g-step>
      <g-step title="步骤2222222"></g-step>
      <g-step title="步骤3"></g-step>
    </g-steps>
    <button @click="next">下一步</button>
  </div>
</template>

<script>
import GSteps from '@/steps/steps.vue'
import GStep from '@/steps/step.vue'
export default {
  name: '',
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0
    },
  },
  components: {
    GSteps,
    GStep,
  },
}
</script>

<style lang="less" scoped>
.box {
  width: 600px;
}
</style>
