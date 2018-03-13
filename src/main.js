import Vue from 'vue'
import store from './store'
import Mint from 'mint-ui'

import 'mint-ui/lib/style.css';
import '~/theme/style.less';

import router from './router'
import Config from './config'
import Api from './api'
import Function from './function'

import App from './App.vue'

Vue.prototype.$Api = Api
Vue.prototype.$Config = Config
Vue.prototype.$Func = Function

Vue.use(Mint)

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title ? to.meta.title + '-' + Config.esowav : Config.esowav;
    store.state.routeLoading = true;
    next();
    // if (!sessionStorage.getItem(Config.tokenKey) && to.path != '/login') {
    //   next({path: '/login'});
    //   //NProgress.done();
    // } else {
    //   next();
    // }
});
router.afterEach(transition => {
    setTimeout(()=>{store.state.routeLoading = false;},100)
});


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
