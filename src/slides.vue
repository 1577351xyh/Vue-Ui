<template>

<div class="x-slide">
    <div class="x-slide-window">
        <div class="x-slide-warpper" ref="window">
            <slot></slot>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: "",
    props:{
        selected:{
            type:String
        }
    },
    updated(){

    },
    mounted(){

    },
    methods:{
      //默认选中的是第一个selected
    }

}
</script>

<style scoped lang="scss">
.x-slide-item{

}
    .slide-leave-active{
        position: absolute;
        left: 0; top: 0;
    }
    .slide-enter-active,.slide-leave-active{
        transition: all 1s;
    }
    .slide-enter{
        transform: translateX(100%);
    }
    .slide-leave-to{
        transform: translateX(-100%);
    }
</style>
