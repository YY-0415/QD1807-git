//gulp任务
var gulp = require("gulp");

gulp.task("copy-html", function(){
	return gulp.src(["html/*.html","!index.html"])
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload())
})
//拷贝index.html
gulp.task("copy-index", function(){
	return gulp.src(["index.html"])
	.pipe(gulp.dest("dist/"))
	.pipe(connect.reload())
})
//拷贝图片
gulp.task("images", function(){
	return gulp.src("image/*.{jpg,png}")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload())
})

//拷贝js代码
gulp.task("scripts", function(){
	return gulp.src(["js/*.js", "!gulpfile.js", "!index.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload())
})

//拷贝index.js
/*
	gulp-uglify
	gulp-rename
*/
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("scripts-index", function(){
	return gulp.src("js/index.js")
	.pipe(gulp.dest("dist/js"))
	/*.pipe(uglify())
	.pipe(rename("index.min.js"))
	.pipe(gulp.dest("dist/js"))*/
	.pipe(connect.reload());
})
//拷贝JQ.cookie.js
gulp.task("scripts-cookie", function(){
	return gulp.src("jquery.cookie.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
/*
	拷贝数据
*/
gulp.task("data", function(){
	return gulp.src(["*.json", "!package.json", "!package-lock.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})
// 拷贝iconfont文件夹里的所有文件
gulp.task("copy",function(){
	return gulp.src(["iconfont/**/*"])
	.pipe(gulp.dest("dist/iconfont"))
	.pipe(connect.reload());
})
gulp.task("copy2",function(){
	return gulp.src(["iconfont2/**/*"])
	.pipe(gulp.dest("dist/iconfont2"))
	.pipe(connect.reload());
})
/*
	处理css文件
	gulp-sass
	gulp-minify-css
*/
var sass = require("gulp-sass");
var minifyCSS = require("gulp-minify-css");
gulp.task("sass", function(){
	return gulp.src("css/index.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass2", function(){
	return gulp.src("css/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
/*
	在运行程序之前，启动监听之前
	先要将上述所有的任务都运行一遍
	build 一次性执行多个任务
*/
gulp.task("build", ["scripts-cookie","copy-index","copy","copy2","copy-html", "images", "scripts-index", "scripts", "data", "sass", "sass2"], function(){
	console.log("任务执行完成，项目已建立");
})
/*
	监听  实时刷新(服务)
*/

gulp.task("watch", function(){
	gulp.watch(["html/*.html"], ["copy-html"]);
	gulp.watch(["index.html"], ["copy-index"]);
	gulp.watch("image/*.{jpg,png}", ["images"]);
	gulp.watch("jquery.cookie.js", ["scripts-cookie"]);
	gulp.watch(["js/*.js", "!gulpfile.js", "!index.js"], ["scripts"]);
	gulp.watch(["*.json", "!package.json", "!package-lock.json"], ['data']);
	gulp.watch("css/index.scss", ["sass"]);
	gulp.watch("css/*.scss", ["sass2"]);
	gulp.watch("js/index.js", ['scripts-index']);
})

/*
	CommonJS规范
	1、安装到本地 npm i gulp-xxx -D
	2、require 引入插件
	3、利用插件编写代码
*/

var connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: "dist",
		port: 9000,
		livereload: true
	})
})

//设置默认任务
gulp.task("default", ["watch", "server"]);