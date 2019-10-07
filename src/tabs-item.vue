<template>
    <div class="tabs-item" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabItem",
        inject:['eventBus'],
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
            name:{
                type:String|Number,
                required:true
            }
        },
        data(){
            return{
                active:false,
            }
        },
        methods:{
            onClick(){
                if(this.disabled){return}
                this.eventBus.$emit('update:selected',this.name,this)
            }
        },
        created(){
            this.eventBus.$on('update:selected',(name)=>{
                if(name===this.name){
                    this.active=true;
                }else {
                    this.active=false;
                }
            })
        },
        computed:{
            classes(){
                return {
                    active:this.active,
                    disabled:this.disabled
                }
            }
        }
    }
</script>

<style scoped lang="less">
.tabs-item{
    cursor: pointer;
    padding: 0 1em;
    height:100%;
    display:flex;
    align-content: center;
    &.active{
       color: blue;
    }
    &.disabled{
        color: #bbbbbb;
        cursor: not-allowed;
      }
}
</style>
