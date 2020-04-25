<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>预览</strong>
    </p>
    <g-input value="中文"></g-input>
    <g-input value="中文" disabled></g-input>
    <g-input icon="ren" placeholder="输入用户名"></g-input>
    <g-input value="中文" error="错误消息"></g-input>
  </div>
</template>
<script>
import GInput from '../../../src/input'

export default {
  components: { GInput },
  data() {
    return {
      selected: '1',
      content: `
          <g-input value="中文"></g-input>
          <g-input value="中文" disabled></g-input>
          <g-input icon="ren" placeholder="输入用户名"></g-input>
          <g-input value="中文" error="错误消息"></g-input>
      `
        .replace(/^ {10}/gm, '')
        .trim(),
    }
  },
}
</script>
