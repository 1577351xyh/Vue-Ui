<template>
  <div style="padding-top: 16px;">
    <h2>设置关闭按钮</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <g-button @click="onClickButton">上方弹出</g-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
.gulu-toast {
  z-index: 30 !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import plugin from '../../../src/toast/plugin'
import GButton from '../../../src/botton/button'
import Vue from 'vue'

Vue.use(plugin)

export default {
  components: { GButton },
  data() {
    return {
      content: `
          <div>
            <g-button @click="onClickButton">上方弹出</g-button>
          </div>

          methods: {
            onClickButton () {
              this.$toast('toast信息', {
                closeButton: {
                  text: '知道了',
                  callback: () => {
                    console.log('回调触发了')
                  }
                }
              })
            }
          },
      `
        .replace(/^ {9}/gm, '')
        .trim()
    }
  },
  methods: {
    onClickButton() {
      this.$toast('toast信息', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('回调触发了')
          }
        }
      })
    }
  }
}
</script>
