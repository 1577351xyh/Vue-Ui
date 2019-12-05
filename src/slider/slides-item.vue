<template>

    <transition name="slide">
        <div class="x-slide-item" v-if="visible" :class="{reverse}">
            <slot></slot>
        </div>
    </transition>

</template>

<script>

    export default {
        name: "slides",
        //接收外部传来的name,通过name来判断当前选中的item的selected
        props:{
            name:{
                type:String,
                required:true
            }
        },
        data(){
            return{
                selected:undefined,
                reverse:false
            }
        },
        computed:{
            visible(){
                return this.selected === this.name;
            }
        }

    }
</script>

<style scoped lang="scss">
    .x-slide-item{
        width:100%;
        height: 100%;
    }
    .slide-leave-active{
        position: absolute;
        left: 0; top: 0;
        width: 100%;
        height: 100%;
    }
    .slide-enter-active,.slide-leave-active{
        transition: all .5s;
    }
    .slide-enter{
        transform: translateX(100%);
    }
    .slide-leave-to{
        transform: translateX(-100%);
    }

    .slide-enter.reverse{
        transform: translateX(-100%);
    }
    .slide-leave-to.reverse{
        transform: translateX(100%);
    }
</style>
