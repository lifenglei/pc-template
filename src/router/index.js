/*
 * @Description: 
 * @Autor: lifenglei
 * @Date: 2020-09-07 15:40:32
 */
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
const routes = [{
		path: '/',
		redirect: '/index'
	},
	{
		name: 'Index',
		path: '/index',
		meta: {
			title: '首页'
		},
		component: resolve => require(['../pages/Index.vue'], resolve)
	},
	{
		name: 'test',
		path: '/test',
		meta: {
			title: '测试页面'
		},
		component: resolve => require(['../pages/Test.vue'], resolve)
	},
	{
		name: 'error',
		path: '/404',
		meta: {
			title: '404'
		},
		component: resolve => require(['../pages/404.vue'], resolve)
	},
	// {
	// 	path: '*',
	// 	redirect: '/404'
	// }
];
const router = new VueRouter({
	mode: 'history',
	routes
});
router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title || '嗨旅游'
	next()
});
router.afterEach((to, from) => {
	window.scrollTo(0, 0)
});
export default router;
