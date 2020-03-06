<template>
  <div style="padding-top: 16px;">
    <h2>表单</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-form :model="model" :rules="rules" ref="loginForm">
      <g-form-item label="用户名" prop="username">
        <g-input
          icon="ren"
          v-model="model.username"
          autocomplete="off"
          placeholder="输入用户名"
        ></g-input>
      </g-form-item>
      <g-form-item label="密码" prop="password">
        <g-input
          icon="mima"
          type="password"
          v-model="model.password"
          autocomplete="off"
          placeholder="输入密码"
        ></g-input>
      </g-form-item>
      <g-form-item>
        <g-buttom @click="submitForm('loginForm')">提交</g-buttom>
      </g-form-item>
    </g-form>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import GForm from '../../../src/Form/form'
import GFormItem from '../../../src/Form/formitem'
import GInput from '../../../src/input'
import GButtom from '../../../src/botton/button'

export default {
  components: {
    GForm,
    GFormItem,
    GInput,
    GButtom
  },
  data() {
    return {
      model: { username: '', password: '' },
      rules: {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }]
      },
      content: `
          data: {
               model: { username: '', password: '' },
               rules: {
                 username: [{ required: true, message: '请输入用户名' }],
                 password: [{ required: true, message: '请输入密码' }]
               },

          }

           methods: {
            submitForm(form) {
              this.$refs[form].validate(valid => {
                if (valid) {
                  window.alert('校验通过')
                } else {
                  window.alert('校验失败')
                }
              })
            }
          }

          <g-form :model="model" :rules="rules" ref="loginForm">
             <g-form-item label="用户名" prop="username">
               <g-input
                 icon="ren"
                 v-model="model.username"
                 autocomplete="off"
                 placeholder="输入用户名"
               ></g-input>
             </g-form-item>
             <g-form-item label="密码" prop="password">
               <g-input
                 icon="mima"
                 type="password"
                 v-model="model.password"
                 autocomplete="off"
                 placeholder="输入密码"
               ></g-input>
             </g-form-item>
             <g-form-item>
               <g-buttom @click="submitForm('loginForm')">提交</g-buttom>
             </g-form-item>
          </g-form>
      `
        .replace(/^ {8}/gm, '')
        .trim()
    }
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          window.alert('校验通过')
        } else {
          window.alert('校验失败')
        }
      })
    }
  }
}
</script>
