// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 通信组件
import Vue from 'vue'
// 表单验证
export default {
	install: function(Vue) {
		// 空验证
		Vue.prototype.nullTest = function(txt) {
				if (txt == "") {
					return true;
				}
				return /^[ ]+$/g.test(txt)
			},
			// qq验证
			Vue.prototype.qqTest = function(txt) {
				return /^[1-9][0-9]{4,10}$/g.test(txt)
			},
			// 密码验证
			Vue.prototype.passwordTest = function(txt) {
				return /^[a-zA-Z]\w{5,17}$/g.test(txt)
			},
			// 图形码
			Vue.prototype.codeTest1 = function(txt) {
				return /^(\d{4})$/g.test(txt)
			},
			// 手机验证码
			Vue.prototype.codeTest2 = function(txt) {
				return /^(\d{6})$/g.test(txt)
			},
			// 手机验证
			Vue.prototype.phoneTest = function(txt) {
				return /^(1\d{10})$/g.test(txt)
			},
			// 邮箱验证
			Vue.prototype.emailTest = function(txt) {
				return /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/g.test(txt)
			},
			// 检测固话号码
			Vue.prototype.telTest = function(txt) {
				return /^((0\d{2,3}-\d{7,8}))$/g.test(txt)
			},
			// 检测手机和固话
			Vue.prototype.telphoneTest = function(txt) {
				return /^((0\d{2,3}-\d{7,8})|(1[345678]\d{9}))$/g.test(txt)
			},
			// 隐藏手机号
			Vue.prototype.phoneHide = function(txt) {
				// return /^((\d{4})(\d{4})(\d)$,'$1****$3'$)/g.test(txt)
				return txt.toString().replace(/^(\d{3})(\d{4})(\d{4})$/, '$1****$3')
			},
			// 替换表单的前后空格
			Vue.prototype.trim = function(txt) {
				return txt.replace(/(^\s*)|(\s*$)/g, "")
			},
			// 整数
			Vue.prototype.int = function(txt) {
				return /^[0-9]*$/g.test(txt)
			},
			// 金钱验证（两位小数）
			Vue.prototype.moneyTest = function(txt) {
				return /(^[1-9](\d+)?(\.\d{1,2})?$)|(^(0){1}$)|(^\d\.\d{1,2}?$)/g.test(txt)
			},
			// 身份证位数
			Vue.prototype.idcardTest = function(txt) {
				if (txt.toString().length == 15 || txt.toString().length == 18) {
					return true
				} else {
					return false
				}
			},
			// /n替换成br
			Vue.prototype.NToBr = function(txt) {
				return txt ? txt.replace(/\n/g, '<br>') : ''
			},
			// br替换成/n
			Vue.prototype.BrToN = function(txt) {
				return txt ? txt.replace(/<br>/g, '\n') : ''
			},
			// 检测姓名(中文)
			Vue.prototype.checkName = function(txt) {
				return /^([\u4e00-\u9fa5]){2,7}$/g.test(txt)
			},
			// emoji表情验证
			Vue.prototype.emojiTest = function(txt) {
				return /^([\u00A9\u00AE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9-\u21AA\u231A-\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA-\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614-\u2615\u2618\u261D\u2620\u2622-\u2623\u2626\u262A\u262E-\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665-\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B-\u269C\u26A0-\u26A1\u26AA-\u26AB\u26B0-\u26B1\u26BD-\u26BE\u26C4-\u26C5\u26C8\u26CE-\u26CF\u26D1\u26D3-\u26D4\u26E9-\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733-\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934-\u2935\u2B05-\u2B07\u2B1B-\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70-\uDD71\uDD7E-\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01-\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50-\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96-\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF])|(\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F-\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95-\uDD96\uDDA4-\uDDA5\uDDA8\uDDB1-\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB-\uDEEC\uDEF0\uDEF3-\uDEF6])|(\uD83E[\uDD10-\uDD1E\uDD20-\uDD27\uDD30\uDD33-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4B\uDD50-\uDD5E\uDD80-\uDD91\uDDC0])$/g
					.test(txt)
			}
	}
}
