<template>
    <div class="collapseItem">
        <div class="title" @click="open=!open">
            {{title}}
        </div>
        <div class="content" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                open:false
            }
        },
        props: {
            title: {
                type: String
            },
            required: true
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss" type="text/scss">
    .collapseItem {
        margin-top: -1px;
        margin-left: -1px;
        margin-right: -1px;
        .title{
            height: 32px;
            padding-left: 8px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid gray;
        }
        &:first-child .title{
            border: 1px solid gray;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            height: 32px;
            padding-left: 8px;
            display: flex;
            align-items: center;
        }
        &:last-child .title{
            margin-bottom: -1px;
        }
        .content{
            padding: 8px;
            border-bottom: 1px solid gray;
        }
        &:last-child .content{
            border-bottom:none;
        }
    }
</style>
