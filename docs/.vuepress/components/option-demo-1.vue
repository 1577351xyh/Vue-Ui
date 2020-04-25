<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-options :default.sync="name">
      <g-redio :name="1">内容1</g-redio>
      <g-redio :name="2">内容2</g-redio>
    </g-options>
  </div>
</template>

<script>
import GOptions from '../../../src/radio/options'
import GRedio from '../../../src/radio/redio'
export default {
  components: {
    GOptions,
    GRedio
  },
  data() {
    return {
      name: 1,
    }
  },
}
</script>
