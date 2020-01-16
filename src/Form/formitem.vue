<template>
<div>
    <p v-if="label">{{label}}</p>
    <slot></slot>
    <p class="errorText" v-if="errorMessage">{{errorMessage}}</p>
</div>
</template>

<script>
    import Schema from 'async-validator'
export default {
        inject: ["form"],
    name: "",
    props:{
        label:{
            type:String,
            default:''
        },
        prop:{
            type:String,
        }
    },
    mounted(){
        this.$on('validate',this.validate)
    },
    data() {
        return {
            errorMessage: ""
        };
    },
    methods:{
        //校验,inputs组件触发校验事件,校验规则由form组件接收
        validate(){
            // element ui校验包
            // npm i async-validator -S
            const value = this.form.model[this.prop];
            const rules = this.form.rules[this.prop];
            // console.log(value)
            // npm i async-validator -S
            const desc = {[this.prop]: rules};
            const schema = new Schema(desc);
            // return的是校验结果的Promise
            return schema.validate({[this.prop]: value}, errors => {
                if (errors) {
                    this.errorMessage = errors[0].message;
                }else {
                    this.errorMessage = ''
                }
            })
        }
    },
}
</script>

<style scoped lang="scss">
.errorText{
    font-size: 12px;
    color: red;
}
</style>
