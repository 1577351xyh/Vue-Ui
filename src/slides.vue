<template>

<div class="x-slide">
    <div class="x-slide-window">
        <div class="x-slide-warpper" ref="window">
            <slot></slot>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: "",
    props:{
        selected:{
            type:String
        },
        autoplay:{
            type:Boolean,
            default:true
        }
    },
    updated(){
        this.updateChildern();
    },
    mounted(){
        this.updateChildern();
        this.playAutopaly()
    },
    methods:{
      //默认选中的是第一个selected
        updateChildern(){
            let selected = this.getSelected();
            //遍历所有的子元素,通知他们当前的selecte
            this.$children.forEach((vm)=>{
                vm.selected = selected;
            });
        },
        //默认获取的selected
        getSelected(){
            let frist = this.$children[0];
            return this.selected || frist.name;
        },
        playAutopaly(){
            //map返回一个新的数组
            let names = this.$children.map(vm=>vm.name);
            // 当前的index值
            let index = names.indexOf(this.getSelected());
            console.log((index))
            setInterval(()=>{
                if(index === names.length){
                    index=0;
                }
                this.$emit('update:selected',names[index+1])
                index++;
            },2000)
        }
    }

}
</script>

<style scoped lang="scss">
.x-slide-item{

}
    .slide-leave-active{
        position: absolute;
        left: 0; top: 0;
    }
    .slide-enter-active,.slide-leave-active{
        transition: all 1s;
    }
    .slide-enter{
        transform: translateX(100%);
    }
    .slide-leave-to{
        transform: translateX(-100%);
    }
</style>
