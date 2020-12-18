import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import MintUI from "mint-ui";
import pinyin from "pinyin";
import "vant/lib/index.css";
import "mint-ui/lib/style.css";
import store from "./store";
import axios from "axios";
import request from "./util/request";
import rem from "./util/rem";
import APlayer from '@moefe/vue-aplayer';
import elementui from "element-ui";
Vue.use(rem);
Vue.use(elementui);
Vue.use(Vant);
Vue.use(MintUI);
Vue.use(APlayer, {
    defaultCover: 'https://github.com/u3u.png',
    productionTip: true,
});
Vue.prototype.pinyin = pinyin;
Vue.prototype.$axios = axios;
Vue.prototype.$request = request;
Vue.config.productionTip = false;

new Vue({
    rem,
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");