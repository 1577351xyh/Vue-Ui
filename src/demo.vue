<template>
    <div>
        <slides :selected="">
            <slides-item>
                <div name="1">1</div>
            </slides-item>
            <slides-item>
                <div name="2">2</div>
            </slides-item>
            <slides-item>
                <div name="3">3</div>
            </slides-item>
        </slides>
    </div>
</template>

<script>
import slides from './siders'
import slidesItem from './slides-item'
export default {
    name: "",
    data(){
        return{

        }
    },
    components:{
        slidesItem,
        slides,
    }
}
</script>

<style scoped>

</style>
