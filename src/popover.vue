<template>
    <div class="popover" @click.stop="clickShow" ref="popover">
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
        positionContent(){
            document.body.appendChild(this.$refs.contentWrapper);
            let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect();
            this.$refs.contentWrapper.style.left=left+window.scrollX+'px';
            this.$refs.contentWrapper.style.top=top+ window.scrollY+'px';
        },
        document(e){
                //如果点击中包含e.target
                if(this.$refs.contentWrapper.contains(e.target) || this.$refs.popover===e.target){
                    return;
                }else{
                   this.close()
                }
        },
        onOpen(){
            this.visible = true;
            this.$nextTick(()=>{
                this.positionContent();
                document.addEventListener('click',this.document)
            });
        },
        close(){
          this.visible =false;
          document.removeEventListener('click',this.document)
        },
        clickShow(event){
            //如果点击的事件中包含triggerWrapper
            if(this.$refs.triggerWrapper.contains(event.target)){
                if(this.visible===true){
                    this.close();
                }else {
                    this.onOpen()
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
