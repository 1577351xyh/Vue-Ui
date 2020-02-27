import Vue from 'vue'
import demo from './demo'


// export {default as Uploader} from './uploader'
// export {default as Validate} from './validate'

new Vue({
    render: h => h(demo),
}).$mount('#app')
