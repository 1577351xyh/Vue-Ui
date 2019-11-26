<template>

<div class="x-slide">
    <div class="x-slide-window">
        <div class="x-slide-warpper" ref="window">
            <slot></slot>
        </div>
    </div>
    <span v-for="n in arrLength" @click="selectedClick(n-1)">
        {{n-1}}
    </span>
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
    data(){
        return{
            arrLength:0
        }
    },
    updated(){
        this.updateChildern();
    },
    mounted(){
        this.updateChildern();
        this.arrLength = this.$children.length;
        this.playAutopaly()
    },
    computed:{
      names(){
          return this.$children.map(vm=>vm.name) || [];
      }
    },
    methods:{
      //默认选中的是第一个selected
        updateChildern(){
            let selected = this.getSelected();
            //遍历所有的子元素,通知他们当前的selecte
            this.$children.forEach((vm)=>{
                vm.selected = selected;
                //通知子元素,告诉他们当前的index和下一个index
                let newIndexs = this.names.indexOf(selected);
                let oldIndexs = this.names.indexOf(vm.names);
                vm.reverse = newIndexs < oldIndexs ? false : true;
            });
        },
        //默认获取的selected
        getSelected(){
            let frist = this.$children[0];
            return this.selected || frist.name;
        },
        selectedClick(index){
            //map返回一个新的数组(带name值的)
            this.$emit('update:selected',this.names[index]);
        },
        playAutopaly(){
            // 当前的index值
            let index = this.names.indexOf(this.getSelected());
            // settimeou模仿interval
            let run = ()=>{
                let newIndex = index-1;
                // 反向
                if(newIndex === -1){newIndex = this.names.length-1}
                // 正向
                if(newIndex === this.names.length){newIndex=0}
                // this.$emit('update:selected',names[newIndex]);
                this.selectedClick(newIndex)
                setTimeout(run,2000)
            };
            // setTimeout(run,2000)
            // setInterval(()=>{
            //     if(index === names.length){
            //         index=0;
            //     }
            //     this.$emit('update:selected',names[index+1])
            //     index++;
            // },2000)
        }
    }

}
</script>

<style scoped lang="scss">
.x-slide{
    display: inline-block;
.x-slide-window,.x-slide-warpper{
    position: relative;
    overflow: hidden;
}
}

</style>
