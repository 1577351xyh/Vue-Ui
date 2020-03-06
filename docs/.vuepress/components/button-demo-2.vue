<template>
  <div style="padding-top: 16px;">
    <h2>button组合用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button-group>
      <g-button>选项一</g-button>
      <g-button>选项二</g-button>
      <g-button>选项三</g-button>
      <g-button>选项四</g-button>
    </g-button-group>
    <br>
    <g-button-group>
      <g-button icon="left"></g-button>
      <g-button>选项</g-button>
      <g-button icon="right"></g-button>
    </g-button-group>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Button from '../../../src/botton/button'
import ButtonGroup from '../../../src/botton/button-group'

export default {
  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup
  },
  data() {
    return {
      content: `
          <g-button-group>
            <g-button>选项一</g-button>
            <g-button>选项二</g-button>
            <g-button>选项三</g-button>
            <g-button>选项四</g-button>
          </g-button-group>
          
          <g-button-group>
            <g-button icon="left"></g-button>
            <g-button>选项</g-button>
            <g-button icon="right"></g-button>
          </g-button-group>
      `
        .replace(/^ {10}/gm, '')
        .trim()
    }
  }
}
</script>
