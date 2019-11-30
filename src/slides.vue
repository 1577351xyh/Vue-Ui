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
            arrLength:0,
            lastSelected:undefined,
        }
    },
    updated(){
        this.updateChildern();
        console.log('上次被选中'+this.lastSelected)
        console.log('这次被选中'+this.selectedIndex)
    },
    mounted(){
        this.updateChildern();
        this.arrLength = this.$children.length;
        this.playAutopaly();
        //上次被选中的值,记录下来
        this.lastSelected = this.selectedIndex;
    },
    computed:{
      selectedIndex(){
         return this.names.indexOf(this.selected)|| 0 ;
      },
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
                //通知子元素,告诉他们当前的index和下一个index
                //当前点击的是不是大于上一次点击的,如果是,就是正向
                // reverse是反向动画
                vm.reverse = this.selectedIndex  > this.lastSelected ? false : true;

                this.$nextTick(()=>{
                    vm.selected = selected;
                })
            });
        },
        //默认获取的selected
        getSelected(){
            let frist = this.$children[0];
            return this.selected || frist.name;
        },
        selectedClick(index){
            //map返回一个新的数组(带name值的)
            //上次选中的值,selectedindex变化之前把值给记下来,每次点击selectedindex都会被计算属性计算一次
            this.lastSelected = this.selectedIndex;
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
