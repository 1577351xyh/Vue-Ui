<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>

    <Checkbox-groud :checkList.sync="checkList" checkAll>
      <Checkbox label="复选框 A"></Checkbox>
      <Checkbox label="复选框 b"></Checkbox>
      <Checkbox label="复选框 c"></Checkbox>
    </Checkbox-groud>
  </div>
</template>

<script>
import CheckboxGroud from '../../../src/chebox/chebox-group'
import Checkbox from '../../../src/chebox/chebox'
export default {
  components: {
    CheckboxGroud,
    Checkbox,
  },
  data() {
    return {
      checkList: [],
    }
  },
}
</script>
