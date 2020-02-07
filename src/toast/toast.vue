<template>
  <div class="wrapper" :class="toastClass">
    <div class="toast" ref="toast">
      <div v-html="$slots.default[0]" class="text"></div>
      <div class="line" ref="line"></div>
      <div v-if="closeButton" @click="onClickClose" class="close">
        {{ closeButton.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    toastClass() {
      return { [`position-${this.position}`]: true }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000)
    }
    this.$nextTick(() => {
      this.$refs.line.style.height = `${
        this.$refs.toast.getBoundingClientRect().height
      }px`
    })
  },
  methods: {
    close() {
      this.$el.remove()
      //销毁
      this.$destroy()
    },
    onClickClose() {
      this.close()
      //如果传过来有button.callback并且是一个函数
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    }
  }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-dowm {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
}
.toast {
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  background-color: $toast-bg;
  color: #fff;
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}
.line {
  margin: 0 16px;
  width: 1px;
  background-color: #666666;
  height: 100%;
}
.close {
  padding-left: 8px;
  flex-shrink: 0;
}
.text {
  margin: 8px 0;
  max-width: 200px;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}

.position-top {
  top: 0;
  .toast {
    animation: slide-dowm 1s;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
.position-bottom {
  bottom: 0;
  .toast {
    animation: slide-up 1s;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.position-middle {
  top: 50%;
  transform: translate(-50%, -50%);
  .toast {
    animation: fade-in 1s;
  }
}
</style>
