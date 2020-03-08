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
    <Scroll :arrCount="arr" @scrollLoad="scrollLoad"></Scroll>
  </div>
</template>

<script>
import Options from './radio/options'
import redio from './radio/redio'
import CheckboxGroud from './chebox/chebox-group'
import Checkbox from './chebox/chebox'
import Scroll from './Scroll/scroll'
export default {
  name: '',
  data() {
    return {
      name: 1,
      checkList: [],
      arr:[1, 2, 3, 4, 5, 6, 7, 8, 10]
    }
  },
  methods: {
    aaa() {
      console.log(this.vlaue)
      console.log(this.checkList)
    },
    scrollLoad(){
      console.log('触底了')
      setTimeout(()=>{
       this.arr = this.arr.concat([1,2,3,4])
      },500)
    }
  },
  components: {
    redio,
    Options,
    Checkbox,
    CheckboxGroud,
    Scroll
  }
}
</script>

<style scoped lang="scss"></style>
