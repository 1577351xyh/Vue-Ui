<template>
<div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: "",
    props:{
        gutter:{
            type:[Number,String]
        },
        align:{
            type:String,
            validator(value){
                return ['left','right','center'].includes(value)
            }
        }
    },
    data(){
        return{

        }
    },
    created(){
        //没有子组件

    },
    computed:{
        rowClass(){
            let {align} = this;
            return [align && `align-${align}`]
        },
        rowStyle(){
            let gutter = this.gutter;
            return {marginLeft:- gutter/2+'px',marginRight:- gutter/2+'px'}
        }
    },
    mounted(){
        this.$children.forEach((vm)=>{
            vm.gutter = this.gutter
        })
    }
}
</script>

<style scoped lang="scss">
.row{
    display: flex;
}
.align-left{
    justify-content: flex-start;
}
.align-right{
    justify-content: flex-end;
}
.align-center{
    justify-content: center;
}
</style>
