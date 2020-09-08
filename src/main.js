/*
 * @Description:项目入口
 * @Autor: lifenglei
 * @Date: 2020-09-07 15:56:09
 */
Vue.config.productionTip = false; // vue 在启动时生成生产提示
Vue.config.silent = false; // vue生产环境提示
//引入vue四件套 Vue App router store
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//添加工具插件
import formcheck from 'utils/formcheck';
import formatDate from 'utils/formatDate';
import layout from 'utils/layout';
//引入elementUi组件库
import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)
Vue.use(formcheck)
Vue.use(layout)
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css';
import "css/normalize.css";
import "css/base.less";
import "css/layout.less";
//添加全剧指令
// 日期格式化 <td>{{ item.create_time | formatDate('yyyy-MM-dd') }}</td>
Vue.filter('formatDate', formatDate);
window.vm = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
