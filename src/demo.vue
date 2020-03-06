<template>
  <div>
    <Options :default.sync="name">
      <redio :name="1">内容1</redio>
      <redio :name="2">内容2</redio>
    </Options>
    <Checkbox>选项1</Checkbox>
  </div>
</template>

<script>
import Options from './radio/options'
import redio from './radio/redio'
import Checkbox from './chebox/chebox'

export default {
  name: '',
  data() {
    return {
      name: 1
    }
  },
  methods: {
    aaa() {
      console.log(this.name)
    }
  },
  components: {
    redio,
    Options,
    Checkbox
  }
}
</script>

<style scoped lang="scss"></style>
