import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import MintUI from "mint-ui";
import pinyin from "pinyin";
import "vant/lib/index.css";
import "mint-ui/lib/style.css";
import store from "./store";
import request from "./util/request";
Vue.prototype.pinyin = pinyin;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.use(Vant);
Vue.use(MintUI);

Vue.prototype.$request = request;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
