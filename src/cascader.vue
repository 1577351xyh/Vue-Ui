<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible=true">
            <slot></slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <cascader-item :items="source"></cascader-item>
        </div>
    </div>

</template>

<script>
    import cascaderItem from './cascader-item'
export default {
        name: "",
        components:{
            cascaderItem
        },
        data(){
            return{
                popoverVisible:false
            }
        },
        props:{
            source:{
                type:Array
            }
        }
    }

</script>

<style scoped>
    .trigger{
        width:200px;
        height: 100px;
        border: 1px solid red;
    }

</style>
