<template>
  <div class="gulu-selecte" @click="isShow">
    <g-input
      v-bind="$attrs"
      readonly="readonly"
      autocomplete="readonly"
      class="input__inner"
      v-model="value"
    ></g-input>
    <span v-if="label" class="gulu-selecte-text">{{ label }}</span>
    <div class="gulu-selecte-item" v-show="show">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import GInput from '@/input.vue'
import Vue from 'vue'
export default {
  inheritAttrs: false,
  data() {
    return {
      show: false,
      eventBus: new Vue(),
      value: null,
      label: null,
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  components: {
    GInput,
  },
  mounted() {
    this.eventBus.$on('update:selectedValue', (row) => {
      this.label = row.label
      this.value = row.value
      this.$emit('input',this.value)
    })
    // this.$emit('input', e.target.value)
  },
  methods: {
    isShow() {
      this.show = !this.show
    },
  },
}
</script>
<style lang="less" scope>
.gulu-selecte {
  display: inline-block;
  position: relative;
  .gulu-selecte-text {
    position: absolute;
    font-size: 12px;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    height: 94%;
  }
  .input__inner {
    input {
      cursor: pointer !important;
    }
  }
  .gulu-selecte-item {
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 6px 0;
    margin: 5px 0;
    width: 100%;
    position: absolute;
    top: 100%;
    overflow: scroll;
    max-height: 280px;
  }
}
</style>
