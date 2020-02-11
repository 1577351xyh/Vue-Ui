<template>
  <div class="x-page">
    <span class="pager-nav" @click="onClickPage(currentPage - 1)">
      <x-icon name="left"></x-icon
    ></span>

    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="x-page-item current" @click="onClickPage(page)">{{
          page
        }}</span>
      </template>

      <template v-else-if="page === '...'">
        <span>...</span>
      </template>

      <template v-else>
        <span class="x-page-item other" @click="onClickPage(page)">{{
          page
        }}</span>
      </template>
    </template>
    <span class="pager-nav" @click="onClickPage(currentPage + 1)"
      ><x-icon name="right"></x-icon
    ></span>
  </div>
</template>
<script>
import XIcon from '../icon/icon'
export default {
  name: 'pager',

  props: {
    //总页
    totalPage: {
      type: Number,
      required: true
    },
    //当前页数
    currentPage: {
      type: Number,
      required: true
    },
    //一页是否显示
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  components: { XIcon },
  computed: {
    pages() {
      let arr = [
        1,
        this.totalPage,
        this.currentPage,
        this.currentPage - 1,
        this.currentPage - 2,
        this.currentPage + 1,
        this.currentPage + 2
      ]
      //去重,排序
      arr = this.unique(arr)
        //过滤
        .filter(n => n >= 1 && n <= this.totalPage)
        //保证每次都有6个页码
        //reduce Api push ...
        .reduce((prev, currrt, index, arrar) => {
          prev.push(currrt)
          if (
            arrar[index + 1] !== undefined &&
            arrar[index + 1] - arrar[index] > 1
          ) {
            prev.push('...')
          }
          return prev
        }, [])
      return this.addNumber(arr)
    }
  },
  methods: {
    onClickPage(page) {
      this.$emit('update:currentPage', page)
    },
    addNumber(arr) {
      let array = arr
      if (this.currentPage == 1) {
        array.splice(3, 0, 4)
        array.splice(4, 0, 5)
        array.splice(5, 0, 6)
      }
      if (this.currentPage == 2) {
        array.splice(4, 0, 5)
        array.splice(5, 0, 6)
      }
      if (this.currentPage == 3) {
        array.splice(5, 0, 6)
      } else if (this.currentPage === this.totalPage) {
        array.splice(2, 0, this.totalPage - 3)
        array.splice(2, 0, this.totalPage - 4)
        array.splice(2, 0, this.totalPage - 5)
      } else if (this.currentPage === this.totalPage - 1) {
        array.splice(2, 0, this.totalPage - 4)
        array.splice(2, 0, this.totalPage - 5)
      } else if (this.currentPage === this.totalPage - 2) {
        array.splice(2, 0, this.totalPage - 5)
      }
      return array
    },
    unique(arr) {
      //去重,但是兼容性不是很好
      // return [...new Set(arr)]
      const object = {}
      arr.map(number => {
        object[number] = true
      })
      return Object.keys(object).map(s => parseInt(s, 10))
    }
  }
}
</script>
<style lang="less" scope>
.x-page {
  width: auto;
  display: flex;
  .x-page-item {
    margin: 0 5px;
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #333333;
    cursor: pointer;
    font-size: 12px;
    &:hover {
      border: 1px solid #666666;
    }
  }
  .current {
    border: 1px solid #409eff;
    color: #409eff;
  }
  .pager-nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
