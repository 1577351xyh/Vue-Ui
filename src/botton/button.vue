<template>
  <button
    class="x-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <x-icon v-if="icon && !loading" class="icon" :name="icon"></x-icon>
    <x-icon class="icon loading" v-if="loading" name="loading"></x-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from '../icon/icon'
export default {
  components: {
    'x-icon': Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      //参数验证
      validator(value) {
        return !(value !== 'left' && value !== 'right')
      }
    }
  }
}
</script>

<style scoped>
/*loading动画*/
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  animation: spin 2s infinite linear;
}

.x-button {
  font-size: 14px;
  height: 32px;
  padding: 0 1em;
  border-radius: 4px;
  border: 1px solid #bbb;
  background: #ffffff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}
.x-button:hover {
  border-color: #666;
}
.x-button:active {
  background-color: #999;
}
.x-button:focus {
  outline: none;
}
.content {
  order: 2;
}
.icon {
  order: 1;
  margin-right: 0.3em;
}
.icon-right .content {
  order: 1;
}
.icon-right .icon {
  order: 2;
  margin-right: 0px;
  margin-left: 0.3em;
}
</style>
