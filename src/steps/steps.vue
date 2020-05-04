<template>
  <div class="gulu-steps" ref="steps">
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
      console.log(this.$children.length - 1)
      let childrenWidth = 1 / (this.$children.length - 1)
      childrenWidth = Number(childrenWidth * 100).toFixed(1) + '%'
      this.$children.forEach((vm) => {
        vm.$el.style.flexBasis = childrenWidth
      })
      console.log(childrenWidth)
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
  justify-content: space-between;
  .gulu-step:last-child {
    // width: auto !important;
    flex-basis: auto !important;
    .gulu-step-head {
      .gulu-line {
        display: none;
      }
    }
  }
}
</style>
