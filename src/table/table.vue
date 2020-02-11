<template>
  <div class="gulu-table-box">
    <table class="gulu-table" :class="{ compact, border }">
      <thead>
        <tr>
          <th>
            <input
              @change="chekeboxChangeAll($event)"
              type="checkbox"
              :checked="areItemAllSelected"
            />
          </th>
          <th v-for="item in columns" :key="item.field">
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key="item.id">
          <td>
            <input
              @change="chekeboxChange(item, index, $event)"
              type="checkbox"
              :checked="selectedItem.filter(i => i.id === item.id).length > 0"
            />
          </td>
          <template v-for="column in columns">
            <td :key="column.field">{{ item[column.field] }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {}
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
      //判断两个数组是否箱单
      return true;
    }
  },
  methods: {
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
  padding: 4px;

  .gulu-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid #ebeef5;
    th,
    tr,
    td {
      border-bottom: 1px solid #ebeef5;
      border-left: 1px solid #ebeef5;
      padding: 8px;
      text-align: left;
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
  .compact {
    tr {
      padding: 4px;
    }
  }
  .border {
    border: 1px solid #ebeef5;
  }
}
</style>
