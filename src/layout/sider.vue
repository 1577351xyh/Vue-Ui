<template>
    <transition name="fade">
    <div class="sider" v-if="visible">
        <slot></slot>
        <button @click="visible=false">隐藏</button>
    </div>
    </transition>
</template>

<script>
    export default {
        name: "GuluSide",
        data(){
            return{
                visible:true
            }
        }
    }
</script>

<style scoped lang="scss">
.sider{
    position: relative;
    button{
        position: absolute;
        top: 0;
        right: 0;
    }
}

.fade-enter-active, .fade-leave-active{
    transition: all .5s;
}
.fade-enter, .fade-leave-to{
    margin-left: -200px;
}
</style>
