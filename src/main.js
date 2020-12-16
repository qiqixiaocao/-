import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import Vant from 'vant';
import MintUI from 'mint-ui'
import pinyin from 'pinyin'
import 'vant/lib/index.css';
import 'mint-ui/lib/style.css'
import store from './store'
Vue.prototype.pinyin = pinyin

Vue.use(Vant);
Vue.use(MintUI)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
