module.exports = {
	// 修改 src 目录 为 examples 目录
	pages: {
		index: {
			entry: "examples/main.js",
			template: "public/index.html",
			filename: "index.html"
		}
	},
	css: {
		extract: false
	},
	chainWebpack: config => {
		config.module
			.rule("js")
			.include.add(__dirname + "packages")
			.end()
			.use("babel")
			.loader("babel-loader")
			.tap(options => {
				return options;
			});
	}
};
