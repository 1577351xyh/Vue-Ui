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
