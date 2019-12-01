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
        padding:10px;
        display: block;
    }
        .x-sub-popover{
            position: absolute;
            top: 100%;
            background-color:#fff;
            left: 0;
            margin-top: 4px;
            border-radius: 4px;
            box-shadow: 0 0 3px #dddddd;
            border: 1px solid #dddddd;
            white-space: nowrap;
            font-size: 12px;
            color:#999999;
            min-width: 8em;
        }
    }
    .x-sub-nav .x-sub-nav .x-sub-popover{
        top: 0;
        left: 100%;
        margin-left: 8px;
    }


</style>
