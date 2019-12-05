<template>
    <div>
        <k-form :model="model" :rules="rules" ref="loginForm">
            <k-form-item label="用户名" prop="username">
                <k-input v-model="model.username" autocomplete="off" placeholder="输入用户名"></k-input>
            </k-form-item>
            <k-form-item label="确认密码" prop="password">
                <k-input type="password" v-model="model.password" autocomplete="off"></k-input>
            </k-form-item>
            <k-form-item>
                <button @click="submitForm('loginForm')">提交</button>
            </k-form-item>
        </k-form>
        {{model}}
    </div>
</template>

<script>
    import KForm from "./form";
    import KFormItem from "./formitem";
    import KInput from "./inputs";

    // import Notice from "@/components/notice/KNotice";

    export default {
        components: {
            KForm,
            KFormItem,
            KInput
        },
        data() {
            return {
                model: { username: "1111", password: "" },
                rules: {
                    username: [{ required: true, message: "请输入用户名" }],
                    password: [{ required: true, message: "请输入密码" }]
                }
            };
        },
        methods: {
            submitForm(form) {
                this.$refs[form].validate(valid => {
                    if(valid){
                        window.alert('请求登录')
                    }else {
                        window.alert(('校验失败'))
                    }
                    // const notice = this.$create(Notice, {
                    //     title: "社会你杨哥喊你来搬砖",
                    //     message: valid ? "请求登录!" : "校验失败!",
                    //     duration: 1000
                    // });
                    // notice.show();
                });
            }
        }
    };
</script>
