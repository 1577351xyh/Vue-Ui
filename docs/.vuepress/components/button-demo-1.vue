<template>
  <div style="padding-top: 16px;">
    <h2>Button 按钮</h2>
    <g-button>默认按钮</g-button>
    <g-button icon="settings" iconPosition="right">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
  </div>
</template>
<script>
import Button from '../../../src/botton/button'

export default {
  components: {
    'g-button': Button,
  },
  data() {
    return {}
  },
}
</script>
