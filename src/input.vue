<template>
  <div class="wrapper" :class="{ error }">
    <div class="wrapper" :class="{ 'warpper-icon': icon }" v-if="icon">
      <icon :name="icon"></icon>
      <input
        type="text"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        @change="$emit('change', $event.target.value)"
        @input="onInput"
        @focus="$emit('focus', $event.target.value)"
        @blur="$emit('blur', $event.target.value)"
        v-bind="$attrs"
      />
      <!-- <icon name="error" class="iconvc-error"></icon> -->
      <span class="errorMessage">{{ error }}</span>
    </div>

    <div class="wrapper" v-else>
      <input
        type="text"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        @change="$emit('change', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        @focus="$emit('focus', $event.target.value)"
        @blur="$emit('blur', $event.target.value)"
        v-bind="$attrs"
      />
      <!-- <icon name="error" class="iconvc-error"></icon> -->
      <span class="errorMessage">{{ error }}</span>
    </div>
  </div>
</template>
<script>
import Icon from './icon/icon'
export default {
  inheritAttrs: false,
  components: {
    Icon
  },
  props: {
    icon: {
      type: String
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  
    methods: {
      onInput(e) {
        this.$emit('input', e.target.value)
        //input校验
        this.$parent.$emit('validate')
      }
    }
  
}
</script>

<style scoped lang="less">
// $height:32px;
// $border-color:#999;
// $border-color-hover:#666;
// $border-radius:4px;
// $font-size:12px;
// $box-shadow-color:rgba(0,0,0,0.5);
// $red:#F1353D;
.wrapper {
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  font-size: 12px;
  > input {
    height: 28px;
    border: 1px solid #999999;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: #666666;
    }
    &:focus {
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: #f1353d;
    }
  }
  .errorMessage {
    color: #f1353d;
  }
  .icon-error {
    color: #f1353d;
  }
}
.warpper-icon {
  border: 1px solid #999999;
  border-radius: 4px;
  padding: 0px 10px;
  > :not(:last-child) {
    margin-right: 0;
  }
  > input {
    height: 28px;
    border: none;
    padding: 0 4px;
    font-size: inherit;
    &:hover {
      border-color: #666666;
    }
    &:focus {
      box-shadow: none;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
}
</style>
