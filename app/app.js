import Vue from 'vue'

import VueRouter  from 'vue-router'

Vue.use(VueRouter)

require('./css/style.css')

// require('./component.js')(Vue)

require('./router.js')(Vue,VueRouter)

require('./index.js')(Vue)





