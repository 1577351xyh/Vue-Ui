<template>
  <div>
    <Options :default.sync="name">
      <redio :name="1">内容1</redio>
      <redio :name="2">内容2</redio>
    </Options>
    <Checkbox-groud :checkList.sync="checkList" checkAll>
      <Checkbox label="复选框 A"></Checkbox>
      <Checkbox label="复选框 b"></Checkbox>
      <Checkbox label="复选框 c"></Checkbox>
    </Checkbox-groud>
    <button @click="aaa">adds</button>
  </div>
</template>

<script>
import Options from './radio/options'
import redio from './radio/redio'
import CheckboxGroud from './chebox/chebox-group'
import Checkbox from './chebox/chebox'

export default {
  name: '',
  data() {
    return {
      name: 1,
      checkList: []
    }
  },
  methods: {
    aaa() {
      console.log(this.vlaue)
      console.log(this.checkList)
    }
  },
  components: {
    redio,
    Options,
    Checkbox,
    CheckboxGroud
  }
}
</script>

<style scoped lang="scss"></style>
