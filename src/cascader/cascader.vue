<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{ result || '请选择省市' }}
    </div>
    <div class="popover" :style="{ height: itemheight }" v-if="popoverVisible">
      <cascader-item
        :selected="selected"
        @update:selected="onUpdateSelected"
        :items="source"
        @hide="isHide"
      ></cascader-item>
    </div>
  </div>
</template>

<script>
import cascaderItem from './cascader-item.vue'
export default {
  name: '',
  components: {
    cascaderItem,
  },
  data() {
    return {
      popoverVisible: false,
    }
  },
  props: {
    source: {
      type: Array,
    },
    itemheight: {
      type: String,
    },
    selected: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    },
    isHide() {
      this.popoverVisible = false
    },
  },
  computed: {
    //把当前被选中的item.name做字符串拼接返回一个字符在串
    result() {
      return this.selected.map((item) => item.name).join('/')
    },
  },
}
</script>

<style scoped lang="less">
.cascader {
  position: relative;
}
.trigger {
  min-width: 10em;
  display: inline-flex;
  align-items: center;
  padding: 0 1em;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #999999;
}
.popover {
  position: absolute;
  top: 105%;
  left: 0;
  z-index: 1;
  background: #ffffff;
}
</style>
