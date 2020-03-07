<template>
  <div class="gulu-chebox-group" :class="{ checkAll }">
    <div class="gulu-chebox-all">
      <span>全选</span>
      <input
        type="checkbox"
        @change="Allchange($event)"
        :checked="allSelected"
      />
    </div>
    <span class="gulu-group">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    checkList: {
      type: Array,
      requierd: true
    },
    checkAll: {
      type: Boolean,
      defalte: false
    }
  },
  data() {
    return {
      arr: [],
      children: []
    }
  },
  mounted() {
    this.$children.forEach(item => {
      this.children.push(item.label)
    })
  },
  computed: {
    allSelected() {
      //判断两个数组是否相等,不能纯根据数组长度去做判断
      const a = this.children.toString().length
      const b = this.arr.toString().length
      return a === b ? true : false
    }
  },
  methods: {
    Allchange(e) {
      let arr = []
      this.$children.forEach(item => {
        if (e.target.checked) {
          arr.push(item.label)
          item.$data.arr = arr
          this.$emit('update:checkList', arr)
          return
        } else {
          item.$data.arr = []
          this.$emit('update:checkList', arr)
        }
      })
    },
    addItem(label) {
      this.arr = JSON.parse(JSON.stringify(this.checkList))
      this.arr.push(label)
      this.$emit('update:checkList', this.arr)
    },
    removeItem(label) {
      this.arr = JSON.parse(JSON.stringify(this.checkList))
      let index = this.arr.indexOf(label)
      this.arr.splice(index, 1)
      this.$emit('update:checkList', this.arr)
    }
  }
}
</script>

<style lang="less" scope>
.gulu-chebox-group {
  display: inline-flex;
  .gulu-group {
    display: inline-flex;
    align-items: center;
  }
  .gulu-chebox-all {
    // width: 100%;
  }
  span {
    font-size: 14px;
  }
}
.checkAll {
  margin-bottom: 8px;
  flex-direction: column;
}
</style>
