<template>
    <div class="popover" @click.stop="clickShow">
        <div ref="contentWrapper" v-show="visible" class="content-wrapper" @click.stop="">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: "",
    data(){
        return{
            visible:false
        }
    },
    methods:{
        clickShow(){
            console.log(111)
            this.visible = !this.visible;
            if(this.visible===true){
                this.$nextTick(()=>{
                    document.body.appendChild(this.$refs.contentWrapper);
                    let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect();

                    let PopoverClick= ()=> {
                        this.visible=false;
                        //删除ducoment监听
                        document.removeEventListener('click',PopoverClick)
                    };
                    //新建监听
                    document.addEventListener('click',PopoverClick)
                });
            }
        }
    },
    mounted(){

    }
}
</script>

<style scoped lang="scss">
.popover{
    display: inline-block;
    vertical-align: top;
    position:relative;
}
.content-wrapper{
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
}
</style>
