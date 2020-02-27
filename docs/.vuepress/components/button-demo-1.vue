<template>
  <div style="padding-top: 16px;">
    <h2>基础用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button>默认按钮</g-button>
    <g-button icon="settings" iconPosition="right">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Button from '../../../src/botton/button'

export default {
  components: {
    'g-button': Button
  },
  data() {
    return {
      content: `
          <g-button>默认按钮</g-button>
          <g-button icon="settings" iconPosition="right">默认按钮</g-button>
          <g-button :loading="true">默认按钮</g-button>
          <g-button disabled>默认按钮</g-button>
      `
        .replace(/^ {10}/gm, '')
        .trim()
    }
  }
}
</script>
