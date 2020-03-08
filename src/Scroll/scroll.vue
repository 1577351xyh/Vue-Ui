<template>
  <div>
    <ul class="gulu-list" ref="scrollDiv">
      <li
        ref="ScrollChild"
        class="gulu-list-item"
        v-for="(item, index) in arrCount"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    arrCount: {
      type: Array,
      requierd: true
    }
  },
  data() {
    return {
      childrenHight: 0
    }
  },
  mounted() {
    this.scroll()
  },
  computed: {
    childHeight() {
      this.$refs.ScrollChild.forEach(element => {
        let styles = getComputedStyle(element) //返回节点所有的css属性
        let padding = styles.getPropertyValue('margin')
        this.childrenHight += element.clientHeight + parseInt(padding)
      })
      return this.childrenHight
    }
  },
  methods: {
    scroll() {
      let div = this.$refs.scrollDiv
      let parentHight = div.clientHeight
      let scrollTop
      this.$refs.scrollDiv.addEventListener('scroll', () => {
        scrollTop = div.scrollTop
        if (scrollTop + parentHight - 10 >= this.childHeight) {
          this.childrenHight = 0
          this.$emit('scrollLoad')
        }
      })
    }
  }
}
</script>
<style lang="less" scope>
.gulu-list {
  overflow: auto;
  height: 300px;
  .gulu-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px;
    color: #7dbcfc;
  }
}
</style>
