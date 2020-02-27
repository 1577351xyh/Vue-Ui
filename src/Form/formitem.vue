<template>
  <div class="g-from-item">
    <p v-if="label" class="lable">{{ label }}</p>
    <slot class="label-input"></slot>
    <p class="errorText" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ['form'],
  name: '',
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  mounted() {
    this.$on('validate', this.validate)
  },
  data() {
    return {
      errorMessage: ''
    }
  },
  methods: {
    //校验,inputs组件触发校验事件,校验规则由form组件接收
    validate() {
      // element ui校验包
      // npm i async-validator -S
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]
      // npm i async-validator -S
      const desc = { [this.prop]: rules }
      const schema = new Schema(desc)
      // return的是校验结果的Promise
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message
        } else {
          this.errorMessage = ''
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.g-from-item {
  padding: 5px;
  margin: 10px 0px;
  display: flex;
  position: relative;
  .lable {
    min-width: 50px;
  }
  p {
    font-size: 14px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .errorText {
    position: absolute;
    top: 90%;
    font-size: 12px;
    color: red;
    padding:0;
    margin: 0;
  }
}
</style>
