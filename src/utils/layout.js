import Vue from 'vue'
import moment from 'moment' // 处理日期
import md5 from 'md5' // md5密码
export default {
	install: function(Vue) {
		let loading = null;
		// 消息提示
		Vue.prototype.infoToast = function(msg, duration = 3000) {
				if (msg) {
					this.$message({
						message: msg,
						type: 'info',
						duration: duration,
						// 是否可关闭
						showClose: false,
						// 提示：自定义提示框样式需要配合el-message__content设置文字颜色 
						// .el-message__closeBtn 设置关闭按钮的样式color
						// 自定义图标的类名，会覆盖 type
						iconClass: 'icon',
						// 自定义类名(提示框的背景颜色)	
						customClass: 'info',
						// 文字居中
						center: true,
						// 关闭执行函数
						onClose: function() {},
						// 距离顶部（默认20）
						offset: 30
					});
				}
			},
			// 警告提示
			Vue.prototype.warnToast = function(msg, duration = 3000) {
				if (msg) {
					this.$message({
						message: msg,
						type: 'warning',
						duration: duration,
						showClose: false,
						customClass: 'warning',
						iconClass: 'none',
						offset: 550
					});
					// 等同于上面
					// this.$message.waring('警告提示')
				}
			},
			// 错误提示
			Vue.prototype.errorToast = function(msg, duration = 3000) {
				if (msg) {
					this.$message({
						message: msg,
						type: 'error',
						duration: duration,
						showClose: true
					});
				}
			},
			// 成功提示
			Vue.prototype.successToast = function(msg, duration = 3000) {
				if (msg) {
					this.$message({
						message: msg,
						type: 'success',
						duration: duration,
						showClose: true
					});
				}
			},
			// 加载
			// 显示loading
			Vue.prototype.loading = function(type, text = '加载中...') {
				loading = this.$loading({
					// 禁止屏幕滚动
					lock: true,
					// 加载文字
					text: text,
					// 加载背景
					background: 'rgba(255,255,255,0.7)',
					// 加载图标
					spinner: "el-icon-loading",
					// 基本无用
					// fullscreen:false,
					// target:document.querySelector('.index')
				});
			},
			// 隐藏loading
			Vue.prototype.loadEnd = function(type) {
				loading.close();
			},
			// 弹窗
			// 注意：原弹窗按钮样式是左取消右确定，但项目UI需要左确定右取消，所以取消与确定的文本和事件对换
			Vue.prototype.wDialog = function(title, content, cancelButtonText, confirmButtonText, showConfirmButton, cb_ok,
				cb_err) {
				this.$confirm(content, title, {
					cancelButtonText: cancelButtonText || '确定',
					confirmButtonText: confirmButtonText || '取消',
					showConfirmButton: showConfirmButton,
					dangerouslyUseHTMLString: true,
					center: true,
					customClass: 'myDialogBox',
					distinguishCancelAndClose: true,
					beforeClose: function(action, instance, done) {
						if (action == 'confirm') {
							done();
						} else if (action == 'close') {
							done();
						} else {
							cb_ok && cb_ok(done);
						}
					}
				}).then(function() {
					cb_err && cb_err();
				}).catch(function() {

				})
			},
			// 指定滚动条位置
			Vue.prototype.wSetScroll = function(top) {
				if (document.documentElement.scrollTop || document.documentElement.scrollTop == 0) {
					document.documentElement.scrollTop = top;
				} else if (window.pageYOffset || window.pageYOffset == 0) {
					window.pageYOffset = top;
				} else if (document.body.scrollTop || document.body.scrollTop == 0) {
					document.body.scrollTop = top;
				}
			},
			// 返顶
			Vue.prototype.wToTop = function() {
				this.wSetScroll(0);
			},
			// md5加密
			Vue.prototype.md5 = function(text) {
				return md5(text)
			},
			// 日期格式化
			Vue.prototype.format = function(time, type) {
				return moment(time).format(type)
			},
			// 手机验证码倒计时
			Vue.prototype.setTime = function(that, downtime = 60) {
				// 界面倒计时
				that.phonecode.time = downtime
				that.phonecode.phoneFlag = 1
				that.phonecode.phoneText = '重新获取' + that.phonecode.time + 's'
				var times = setInterval(function() {
					if (--that.phonecode.time !== 0) {
						that.phonecode.phoneText = '重新获取' + that.phonecode.time + 's'
					} else {
						clearInterval(times)
						that.phonecode.phoneText = '重新发送'
						that.phonecode.phoneFlag = 0
					}
				}, 1000)
			}
		// 接口数据加密结束
	}
}
