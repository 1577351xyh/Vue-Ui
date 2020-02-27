<template>
  <div class="x-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: '',
  //依赖注入
  provide() {
    return {
      root: this,
      items: []
    }
  },
  props: {
    multiple: {
      type: Boolean
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      namePath: []
    }
  },
  methods: {
    updateChildern() {
      this.items.forEach(vm => {
        if (this.selected.indexOf(vm.name) > -1) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      })
    },
    listenToChildern() {
      this.items.forEach(vm => {
        //子组件会把当前的name传过来
        vm.$on('add:selected', name => {
          if (this.multiple) {
            //如果没有
            if (this.selected.indexOf(name) < 0) {
              //往外触发事件
              //深拷贝,不能改props
              let copy = JSON.parse(JSON.stringify(this.selected))
              copy.push(name)
              this.$emit('update:selected', copy)
            }
          } else {
            this.$emit('update:selected', [name])
          }
        })
      })
    },
    addItem(vm) {
      this.items.push(vm)
    }
  },
  updated() {
    this.updateChildern()
  },
  mounted() {
    this.updateChildern()
    //监听子组件点击事件
    this.listenToChildern()
  },
  computed: {
    items() {
      return this.$children.filter(vm => vm.$options.name === 'x-nav-item')
    }
  }
}
</script>

<style scoped lang="scss">
.x-nav {
  display: flex;
  border-bottom: 1px solid #dddddd;
}
</style>
