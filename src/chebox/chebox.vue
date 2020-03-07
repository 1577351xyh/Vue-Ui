<template>
  <div class="gulu-checkbox">
    <input type="checkbox" @change="change($event)" :checked="itemSelectet" />
    <span class="gulu-checkbox-text">
      {{ this.label }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      requierd: true
    }
  },
  data() {
    return {
      arr: []
    }
  },
  computed: {
    itemSelectet() {
      return this.arr.indexOf(this.label) > -1
    }
  },
  methods: {
    change(e) {
      //true
      if (e.target.checked) {
        this.$parent.addItem(this.label)
        //false
      } else {
        this.$parent.removeItem(this.label)
      }
    }
  }
}
</script>
<style lang="less" scope>
.gulu-checkbox {
  display: flex;
  margin: 0 8px;
  margin-left: 0;
  .gulu-checkbox-text {
    font-size: 12px;
  }
}
</style>
