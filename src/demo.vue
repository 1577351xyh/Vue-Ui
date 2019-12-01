<template>
    <div>
        <x-nav :selected.sync="selected">
            <x-nav-item name="home">首页</x-nav-item>
            <x-sub-nav name="xxx">
                <template slot="title">关于</template>
                <x-nav-item name="about1">关于1</x-nav-item>
                <x-nav-item name="about2">关于2</x-nav-item>
<!--                <x-nav-item name="about3">关于3</x-nav-item>-->
                <x-sub-nav name="ccc">
                    <template slot="title">关于3</template>
                    <x-nav-item name="about3">关于3.1</x-nav-item>
                    <x-nav-item name="about4">关于3.2</x-nav-item>
                    <x-nav-item name="about5">关于3.3</x-nav-item>
                </x-sub-nav>
                </x-sub-nav>
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
