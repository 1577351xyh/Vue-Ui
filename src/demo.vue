<template>
    <div>
        <slides :selected.sync="selected" width="200px" height="300px">
            <slides-item name="a">
                <div class="box">1</div>
            </slides-item>
            <slides-item name="b">
                <div class="box">2</div>
            </slides-item>
            <slides-item name="c">
                <div class="box">3</div>
            </slides-item>
        </slides>
    </div>
</template>

<script>
import slides from './slides'
import slidesItem from './slides-item'
export default {
    name: "",
    data(){
        return{
            selected:'c'
        }
    },
    components:{
        slidesItem,
        slides,
    }
}
</script>

<style scoped lang="scss">
.box{
    background-color: pink;
    border: 1px solid #ddd;
    height: 200px;
    width: 200px;
}
</style>
