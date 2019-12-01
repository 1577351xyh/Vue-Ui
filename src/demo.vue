<template>
    <div>
        <x-nav :selected.sync="selected">
            <x-nav-item name="home">首页</x-nav-item>
            <x-nav-item name="about">关于</x-nav-item>
            <x-nav-item name="hire">招聘</x-nav-item>
        </x-nav>
    </div>
</template>

<script>
import XNav from './nav'
import XNavItem from './nav-item'
import XSubNav from './sub-nav'


export default {
    name: "",
    data(){
        return{
            selected:['home']
        }
    },
    components:{
        XNav,
        XNavItem,
        XSubNav
    }
}
</script>

<style scoped lang="scss">
.box{
    background-color: #dddddd;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #ffffff;
}
</style>
