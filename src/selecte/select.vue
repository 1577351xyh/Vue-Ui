<template>
  <div class="gulu-selecte" @click="isShow">
    <g-input
      v-bind="$attrs"
      :readonly="!filterable"
      autocomplete="readonly"
      class="input__inner"
      v-model="value"
      @input="searchChange"
    ></g-input>
    <div class="gulu-selecte-box">
      <g-icon class="gulu-selecte-icon" :class="{ flip }" name="xia1"></g-icon>
    </div>
    <div class="gulu-selecte-item" v-show="show" ref="selecteItem">
      <slot></slot>
      <div class="text" v-if="text">{{ text }}</div>
    </div>
  </div>
</template>
<script>
import GInput from '@/input.vue'
import GIcon from '@/icon/icon.vue'
import Vue from 'vue'
export default {
  props: {
    filterable: {
      type: Boolean,
      default: false,
    },
  },
  inheritAttrs: false,
  data() {
    return {
      show: false,
      eventBus: new Vue(),
      value: null,
      label: null,
      children: [],
      text: '',
    }
  },
  computed: {
    flip() {
      return this.show
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  components: {
    GInput,
    GIcon,
  },
  mounted() {
    this.eventBus.$on('update:selectedValue', (row) => {
      this.label = row.value
      this.value = row.label
      this.$emit('input', this.label)
    })
    this.children = this.$children.filter(
      (vm) => vm.$options.name === 'options'
    )
  },
  methods: {
    isShow() {
      this.show = !this.show
    },
    searchChange() {
      let status = true
      this.children.forEach((element, index) => {
        if (element.label.indexOf(this.value) > -1) {
          element.show = true
          this.text = ''
          status = false
        } else {
          element.show = false
        }
      })

      if (status) {
        this.text = '无数据'
      }
    },
  },
}
</script>
<style lang="less" scope>
.gulu-selecte {
  display: inline-block;
  position: relative;
  .gulu-selecte-box {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9;
    .gulu-selecte-icon {
      transition: all 0.5s;
      transform: rotate(0deg);
    }
    .flip {
      transform: rotate(180deg);
    }
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
    .text {
      color: #bbb;
      text-align: center;
      font-size: 12px;
    }
  }
  .wrapper > input[readonly] {
    color: #000;
  }
}
</style>
