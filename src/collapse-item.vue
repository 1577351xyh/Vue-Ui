<template>
    <div class="collapseItem">
        <div class="title" @click="change">
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
                type: String,
                required: true
            },
            name:{
                type:String,
                required: true
            }
        },
        inject:['eventBus'],
        mounted(){
                this.eventBus.$on('update:selected',(name)=>{
                    if(name!==this.name){
                        this.close();
                    }else {
                        this.show()
                    }
                })
        },
        methods:{
            close(){
                this.open=false;
            },
            show(){
                this.open=true;
            },
            change(){
                if(this.open){
                    this.open=false
                }else {
                    this.eventBus.$emit('update:selected',this.name)
                }
            }
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
