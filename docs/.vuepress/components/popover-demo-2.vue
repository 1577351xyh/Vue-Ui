<template>
  <div style="padding-top: 16px;">
    <h2>触发方式hover</h2>

    <p>
      <strong>预览</strong>
    </p>

    <g-popover trigger="hover">
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>

    <g-popover position="bottom" trigger="hover">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>

    <g-popover position="left" trigger="hover">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>

    <g-popover position="right" trigger="hover">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
  </div>
</template>

<script>
import GButton from '../../../src/botton/button'
import GPopover from '../../../src/popover/popover'

export default {
  components: { GButton, GPopover },
  data() {
    return {}
  },
}
</script>
