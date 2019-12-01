<template>
    <div>
        <x-nav>
            <x-nav-item>首页</x-nav-item>
            <x-nav-item>关于</x-nav-item>
            <x-nav-item>招聘</x-nav-item>
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
