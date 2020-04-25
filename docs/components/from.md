---
title: form 表单
---

# 表单

<ClientOnly>
  <from-demo-1></from-demo-1>
</ClientOnly>

::: details 查看代码

```html
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

<script>
  export default {
    data() {
      return {
        model: { username: '', password: '' },
        rules: {
          username: [{ required: true, message: '请输入用户名' }],
          password: [{ required: true, message: '请输入密码' }],
        },
      }
    },
    methods: {
      submitForm(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            window.alert('校验通过')
          } else {
            window.alert('校验失败')
          }
        })
      },
    },
  }
</script>
```

:::

# Attributes

校验规则与 element ui 一致(async-validator)

| 参数  |       说明        |   类型 |              可选值 | 默认 |
| ----- | :---------------: | -----: | ------------------: | ---: |
| model | Form 绑定的数据源 | Object |                  -- |   -- |
| rules |     校验规则      |  Array |                  -- |   -- |
| label |       标题        | String |                  -- |   -- |
| prop  |     校验类型      | String | PassWord , Emai ... |   -- |
