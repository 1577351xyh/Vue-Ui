<template>
<div class="x-sub-nav">
    <span @click="onClick">
        <slot name="title"></slot>
    </span>
    <div class="x-sub-popover" v-show="open">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
name: "",
    data(){
        return{
            open:false
        }
    },
    methods:{
        onClick(){
            this.open=!this.open;
        }
    }
}
</script>

<style scoped lang="scss">
    .x-sub-nav{
        position: relative;
    span{
        padding:5px;
        display: block;
    }
        .x-sub-popover{
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid #dddddd;
            white-space: nowrap;
        }
    }

</style>
