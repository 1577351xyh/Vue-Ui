<template>
    <div>
        <cascader :selected="selected" @update:selected="selected = $event" :source="cascader" :itemheight="'200px'"></cascader>

    </div>
</template>

<script>
import cascader from './cascader'
export default {
    name: "",
    data(){
        return{
            selected:[],
            cascader:[
                {
                    name:'汉洲',
                    children:[
                        {name:'上城'},
                        {name:'上城2'},
                        {name:'上城3'}
                    ]
                },
                {
                    name:'嘉兴',
                    children:[
                        {name:'南湖'},
                        {name:'南湖1'},
                        {name:'南湖2'}
                    ]
                },
                {
                    name:'福建',
                    children:[
                        {
                            name:'福州',
                            children:[
                                {name:'台江'},
                                {name:'仓山'}
                            ]
                        },

                    ]
                },
            ]
        }
    },
    components:{
        cascader,
    }
}
</script>

<style scoped>

</style>
