
<template>
<!--接收校验规则-->
    <div class="g-from">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "",
    //注入,用于祖孙组件中
    provide(){
        return{
            form:this
        }
    },
    props:{
        model: {
            type: Object,
            required: true
        },
        rules:{
            type:Object
        }
    },
    methods:{
        validate(cb) {
            const tasks = this.$children
                .filter(item => item.prop)
                .map(item => item.validate());
            // console.log(this.$children.filter(item => item.prop).map(item=>item.validate()));
            // 所有任务都通过才算校验通过
            Promise.all(tasks)
                .then(() => cb(true))
                .catch(() => cb(false));
        }
    }
}
</script>

<style scoped>

</style>
