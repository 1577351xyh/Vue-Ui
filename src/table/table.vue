<template>
  <div class="gulu-table-box" ref="wrapper">
    <div :style="{ height,overflow:'auto'}">
      <table
        class="gulu-table"
        ref="table"
        :class="{ compact, border }"
      >
        <thead>
          <tr>
            <th :style="{width:'50px'}">
              <input
                @change="chekeboxChangeAll($event)"
                type="checkbox"
                :checked="areItemAllSelected"
              />
            </th>
            <th v-for="item in columns" :key="item.field" :style="{width:item.width+'px'}">
              <div class="table-flex">
                {{ item.text }}
                <span class="g-table-icon" v-if="item.field in orderBy">
                  <g-icon
                    name="shang"
                    :class="{ acitve: orderBy[item.field] === 'asc' }"
                    @click="changeOrderBy(item.field)"
                  ></g-icon>
                  <g-icon
                    name="xia"
                    :class="{ acitve: orderBy[item.field] === 'desc' }"
                    @click="changeOrderBy(item.field)"
                  ></g-icon>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in dataSource" :key="item.id">
            <td :style="{width:'50px'}">
              <input
                @change="chekeboxChange(item, index, $event)"
                type="checkbox"
                :checked="selectedItem.filter(i => i.id === item.id).length > 0"
              />
            </td>
            <template v-for="column in columns">
              <td :style="{width:item.width +'px'}" :key="column.field">{{ item[column.field] }}</td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="loading" class="gulu-table-loading">
      <g-icon name="loading" class="loading"></g-icon>
    </div>
  </div>
</template>
<script>
import GIcon from '../icon/icon'
export default {
  data() {
    return {
      table2: undefined
    }
  },
  components: {
    GIcon
  },
  props: {
    //数据源
    dataSource: {
      type: Array,
      required: true,
      validator(arr) {
        return !(arr.filter(item => item.id === undefined).length > 0)
      }
    },
    //高度
    height: {
      type: String,
      required: true
    },
    //加载状态
    loading: {
      type: Boolean,
      default: false
    },
    //排序
    orderBy: {
      type: Object,
      default: () => {}
    },
    //表头数据
    columns: {
      type: Array,
      required: true
    },
    selectedItem: {
      type: Array,
      default: () => []
    },
    //间距大小
    compact: {
      type: Boolean,
      default: false
    },
    //是否有border
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    areItemAllSelected() {
      //判断两个数组是否箱单 1.根据id排序, 如果纯根据数组长度容易出现bug
      //把id项筛选出出来,做字典排序
      const a = this.dataSource.map(item => item.id).sort()
      const b = this.selectedItem.map(item => item.id).sort()

      if (a.length !== b.length) {
        return false
      }
      let equal = true
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          equal = false
          break
        }
      }
      return equal
    }
  },
  mounted() {
    // this.init()
  },
  methods: {
    init() {
      //复制一个空的table 把带有事件的thead添加进去,留下间距
      this.table2 = this.$refs.table.cloneNode(false)
      this.table2.classList.add('gulu-copy-table')
      let tHead = this.$refs.table.children[0]
      const { height } = tHead.getBoundingClientRect()
      this.$refs.table.style.marginTop = height + 'px'
      this.table2.appendChild(tHead)
      this.$refs.wrapper.appendChild(this.table2)
    },
    changeOrderBy(key) {
      let copy = JSON.parse(JSON.stringify(this.orderBy))
      let odlVlaue = this.orderBy[key]
      if (odlVlaue === 'asc') {
        copy[key] = 'desc'
      } else if (odlVlaue === 'desc') {
        copy[key] = true
      } else {
        copy[key] = 'asc'
      }
      this.$emit('update:orderBy', copy)
    },
    chekeboxChange(item, index, e) {
      //e.target.checked 当前checkbox选中的状态
      // this.$emit('chekeboxChange', { item, index, selected: e.target.checked })
      //深拷贝
      let selected = e.target.checked
      let copy = JSON.parse(JSON.stringify(this.selectedItem))
      if (selected) {
        copy.push(item)
      } else {
        // copy.splice(copy.indexOf(item), 1)
        copy = copy.filter(i => i.id !== item.id)
      }
      this.$emit('update:selectedItem', copy)
    },
    //全选
    chekeboxChangeAll(e) {
      if (e.target.checked) {
        this.$emit('update:selectedItem', this.dataSource)
      } else {
        this.$emit('update:selectedItem', [])
      }
    }
  }
}
</script>
<style lang="less" scope>
.gulu-table-box {
  position: relative;
  .gulu-table {
    width: 100%;
    border-collapse: collapse!important;
    border-spacing: 0;
    border-bottom: 1px solid #ebeef5;
    th,
    tr,
    td {
      border-bottom: 1px solid #ebeef5;
      border-left: 1px solid #ebeef5;
      padding: 8px;
      text-align: left;
      .g-table-icon {
        margin-left: 4px;
        display: inline-flex;
        flex-direction: column;
        svg {
          font-size: 11px;
          cursor: pointer;
          color: #666;
        }
        .acitve {
          color: red;
        }
      }
      
    }
    
    tbody {
      > tr {
        &:nth-child(odd) {
          background: white;
        }
        &:nth-child(even) {
          background: #fafafa;
        }
      }
    }
   
  }
  .gulu-copy-table {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1;
  }
  .compact {
    tr {
      padding: 4px;
    }
  }
  .border {
    border: 1px solid #ebeef5;
  }
  .table-flex {
    display: flex;
    align-items: center;
  }
  .gulu-table-loading {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    .loading {
      font-size: 42px;
      animation: spin 2s infinite linear !important;
    }
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
