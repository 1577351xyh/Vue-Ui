<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" v-show="visible" class="content-wrapper" :class="{[`position-${position}`]:true}">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block;">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: "",
    props: {
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
            }
        },
        trigger:{
            type:String,
            default: 'click',
            validator(value){
                return ['click','hover'].indexOf(value)>=0
            }
        }
    },
    beforeDestroy(){
        if(this.trigger==='click'){
            this.$refs.popover.removeEventListener('click',this.clickShow);
        }else {
            this.$refs.popover.removeEventListener('mouseenter',this.onOpen);
            this.$refs.popover.removeEventListener('mouseleave',this.close);
        }
    },
    mounted(){
        if(this.trigger==='click'){
            this.$refs.popover.addEventListener('click',this.clickShow);
        }else {
            this.$refs.popover.addEventListener('mouseenter',this.onOpen);
            this.$refs.popover.addEventListener('mouseleave',this.close);
        }
    },
    data() {
        return {
            visible: false
        }
    },
    computed:{
        openEvent(){
            if(this.trigger==='click'){
                return 'click'
            }else {
                return 'mouseenter'
            }
        },
        closeEvent(){
            if(this.trigger==='click'){
                return 'click'
            }else {
                return 'mouseleave'
            }
        },
    },
    methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper);
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
                let {height:height2} = this.$refs.contentWrapper.getBoundingClientRect();
                if(this.position==='top'){
                    this.$refs.contentWrapper.style.left = left+window.scrollX + 'px';
                    this.$refs.contentWrapper.style.top = top + window.scrollY+'px'
                }else if(this.position==='bottom'){
                    this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
                    this.$refs.contentWrapper.style.top = top + height + window.scrollY + 'px';
                }else if(this.position==='left'){
                    this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
                    this.$refs.contentWrapper.style.top = top + window.scrollY + (height2-height)/2+'px';
                }else if(this.position==='right'){
                    this.$refs.contentWrapper.style.left = left + window.scrollX + width + 'px';
                    this.$refs.contentWrapper.style.top = top + window.scrollY + (height2-height)/2+'px';
                }
            },
            document(e) {
                //如果点击中包含e.target
                console.log('document')
                if (this.$refs.popover && (this.$refs.popover.contains(e.target) || this.$refs.popover === e.target)) {
                    return;
                }else if(this.$refs.contentWrapper && this.$refs.contentWrapper===e.target || this.$refs.contentWrapper.contains(e.target)){
                    return;
                }
                this.close()
            },
            onOpen() {
                this.visible = true;
                this.$nextTick(() => {
                    this.positionContent();
                    document.addEventListener('click', this.document)
                });
            },
            close() {
                console.log('close')
                this.visible = false;
                document.removeEventListener('click', this.document)
            },
            clickShow(event) {
                //如果点击的事件中包含triggerWrapper
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close();
                    } else {
                        this.onOpen()
                    }
                }
            }
        },

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
    /*filter: drop-shadow(0 1px 3px rgba(0,0,0,0.5));*/
    transform: translateY(-100%);
    margin-top: -10px;
    padding: .5em 1em;
    border-radius: 4px;
    border:1px solid #333;
    max-width:20em;
    word-break:break-all;
    background-color: #ffffff;
}
    .position-top{
        transform: translateY(-100%);
        margin-top: -10px;
        &::before,&::after{content: '';display: block;border:10px solid transparent;width: 0;height: 0;position: absolute;left: 10px;}
        &::before{border-top-color: black;top:100%;}
        &::after{border-top-color: white;top: calc(100% - 1px);}
    }
    .position-bottom{
        margin-top: 10px;
        transform:translateY(0);
        &::before,&::after{content: '';display: block;border:10px solid transparent;width: 0;height: 0;position: absolute;left: 10px;}
        &::before{border-bottom-color: black;bottom:100%;}
        &::after{border-bottom-color: white;bottom: calc(100% - 1px);}
    }

    .position-left{
        transform: translateX(-100%);
        margin-left: -10px;
        &::before,&::after{content: '';display: block;border:10px solid transparent;width: 0;height: 0;position: absolute;top:50%;transform: translateY(-50%)}
        &::before{border-left-color: black; left: 100%}
        &::after{border-left-color: white;left: calc(100% - 1px);}
    }
    .position-right{
        margin-left: 10px;
        transform: translateY(0%);
    &::before,&::after{content: '';display: block;border:10px solid transparent;width: 0;height: 0;position: absolute;top:50%;transform: translateY(-50%)}
    &::before{border-right-color: black; right: 100%}
    &::after{border-right-color: white;right: calc(100% - 1px);}
    }
</style>
