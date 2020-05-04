<template>
  <div
    class="gulu-steps"
    :class="{ 'gulu-vertical': direction === 'vertical' }"
    ref="steps"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    active: {
      type: Number,
      required: true,
    },
    direction: {
      type: String,
      default: 'horizontal',
    },
  },
  data() {
    return {}
  },
  created() {},
  mounted() {
    this.$children.forEach((vm, index) => {
      vm.index = index + 1
    })
    this.isChildrenWidth()
    this.updatedActive()
  },
  methods: {
    // 动态赋值width
    isChildrenWidth() {
      let steps = this.$refs.steps
      let width = steps.getBoundingClientRect().width
      let childrenWidth = 1 / (this.$children.length - 1)
      childrenWidth = Number(childrenWidth * 100).toFixed(1) + '%'
      this.$children.forEach((vm) => {
        vm.$el.style.flexBasis = childrenWidth
      })
    },
    updatedActive() {
      // 把active前的索引单独拉一个数组,全部高亮
      let activeArr = []
      let notActiveArr = []
      for (let i = 1; i <= this.active; i++) {
        let vm = this.$children[i - 1]
        activeArr.push(vm)
      }
      activeArr.forEach((vm) => {
        vm.active = true
      })
    },
    cleraArr() {
      if (this.active === 0) {
        this.$children.forEach((vm) => {
          vm.active = false
        })
      }
    },
  },
  updated() {
    this.cleraArr()
    this.updatedActive()
  },
}
</script>
<style lang="less" scope>
.gulu-steps {
  width: 100%;
  display: inline-flex;
  .gulu-step:last-child {
    flex-basis: auto !important;
    .gulu-step-head {
      .gulu-line {
        display: none;
      }
    }
  }
}
.gulu-vertical {
  height: 100%;
  flex-direction: column;
  .gulu-step {
    width: 100%;
    display: flex;
    align-items: flex-start;
    position: relative;
    .gulu-step-head {
      height: 100%;
      position: inherit;
      .gulu-line {
        display: block;
        width: 1px;
        left: 50%;
        height: 100%;
        top: 26px;
        transform: translateX(-50%);
        background-color: #303133;
      }
    }
    .gulu-step-centent {
      display: flex;
      margin: 10px;
      margin-left: 5px;
      margin-top: 2px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      position: relative;
    }
  }
}
</style>
