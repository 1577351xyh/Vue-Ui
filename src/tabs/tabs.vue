<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "",
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type:String,
                default:'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value)>=0
                }
            }
        },
        data(){
            return{
                eventBus:new Vue()
            }
        },
        provide(){
            return{
                eventBus:this.eventBus
            }
        },
        // created(){
        //     console.log(this.eventBus);
        // },
        mounted() {
            //打印子元素
            this.$children.forEach((vm)=>{
                if(vm.$options.name==='Head'){
                    vm.$children.forEach((item)=>{
                      console.log(item.name)
                        if(item.$options.name==='TabItem' && item.name===this.selected){
                            this.eventBus.$emit('update:selected',this.selected,item)
                        }
                    })
                }
            })

        }
    }
</script>

<style scoped>

</style>
