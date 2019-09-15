<template>
    <div class="popover" @click.stop="clickShow">
        <div ref="contentWrapper" v-show="visible" class="content-wrapper" >
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
        clickShow(event){
            //如果点击的事件中包含triggerWrapper
            if(this.$refs.triggerWrapper.contains(event.target)){
                this.visible = !this.visible;
                if(this.visible===true){
                    this.$nextTick(()=>{
                        document.body.appendChild(this.$refs.contentWrapper);
                        let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect();
                        this.$refs.contentWrapper.style.left=left+window.scrollX+'px';
                        this.$refs.contentWrapper.style.top=top+ window.scrollY+'px';
                        let PopoverClick= (e)=> {
                            //如果点击中包含e.target
                            if(this.$refs.contentWrapper.contains(e.target)){
                            }else{
                                this.visible=false;
                                //删除ducoment监听
                                document.removeEventListener('click',PopoverClick)
                            }
                        };
                        //新建监听
                        document.addEventListener('click',PopoverClick)
                    });
                }
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
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    transform: translateY(-100%);
}
</style>
