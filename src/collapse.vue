<template>
<div class="collapse">
    <slot>

    </slot>
</div>
</template>

<script>
    import Vue from 'vue'
export default {
    props:{
        single:{
            type:Boolean,
            default:false
        },
        selected:{
            type:String,
            required:true
        }
    },
    data(){
        return{
            eventBus:new Vue()
        }
    },
    provide(){
            return{
                eventBus: this.eventBus
            }
    },
    mounted(){
        this.eventBus.$emit('update:selected',this.selected)
        this.eventBus.$on('update:selected',(name)=>{
            //在selected被触发的时候通知外部,并且把name传过去
            this.$emit('update:selected',name)
        });
        this.$children.forEach((vm)=>{
            console.log(this.single)
            vm.single=this.single;
        })
    }
}
</script>

<style scoped lang="scss">
.collapse{
    border: 1px solid gray;
    border-radius: 8px;
    overflow: hidden;
}
</style>
