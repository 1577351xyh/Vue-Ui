<template>
  <div style="padding-top: 16px;">
    <h2>每次只允许一个展开</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-collapse :selected.sync="selected" single>
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
  </div>
</template>
<script>
import GCollapseItem from '../../../src/collapse/collapse-item'
import GCollapse from '../../../src/collapse/collapse'

export default {
  components: {
    GCollapseItem,
    GCollapse,
  },
  data() {
    return {}
  },
}
</script>
