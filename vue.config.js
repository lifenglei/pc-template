module.exports = {
	chainWebpack: config => {
		config.module
			.rule('images')
			.use('url-loader')
			.loader('url-loader')
			.tap(options => Object.assign(options, {
				limit: 10000
			}))
	},
	configureWebpack: {
		resolve: {
			alias: { // 文件路径别名
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'api': '@/api',
				'utils': '@/utils',
				'pages': '@/pages',
				'images': '@/assets/images',
				'css': '@/assets/css',
				'js': '@/assets/js',
			}
		}
	},
	lintOnSave: false,
	publicPath: '/',
	productionSourceMap: false, // 生产环境是否生成 SourceMap
	devServer: {
		host: '0.0.0.0',
		port: '8080',
		proxy: {
			'/api': {
				target: 'http://dz26.mrxdtech.com/api/', // 接口域名(仅本地模式有效)
				changeOrigin: true, //是否跨域
				pathRewrite: {
					'^/api': '' //需要rewrite的,
				}
			}
		},
	},
	// css: {
	// 	loaderOptions: {
	// 		postcss: {
	// 			plugins: [
	// 				require('postcss-pxtorem')({
	// 					rootValue: 16, // 换算的基数
	// 					selectorBlackList: [], // 忽略转换正则匹配项
	// 					propList: ['*'],
	// 				}),
	// 			]
	// 		}
	// 	}
	// }
}
