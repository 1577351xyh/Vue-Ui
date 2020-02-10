<template>
  <div class="gulu-table-box">
    <table class="gulu-table" :class="{ compact, border }">
      <thead>
        <tr>
          <th>
            <input @change="chekeboxChangeAll($event)" type="checkbox" />
          </th>
          <th v-for="item in columns">
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource">
          <th>
            <input
              @change="chekeboxChange(item, index, $event)"
              type="checkbox"
            />
          </th>
          <template v-for="column in columns">
            <th>{{ item[column.field] }}</th>
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
      validator(arr){
       return !(arr.filter(item=>item.id===undefined).length>0)
      }
    },
    //表头数据
    columns: {
      type: Array,
      required: true
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
  methods: {
    chekeboxChange(item, index, e) {
      //e.target.checked 当前checkbox选中的状态
      this.$emit('chekeboxChange', { item, index, selected: e.target.checked })
    },
    //全选
    chekeboxChangeAll(e){

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
    tr {
      border-bottom: 1px solid #ebeef5;
      padding: 8px;
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
