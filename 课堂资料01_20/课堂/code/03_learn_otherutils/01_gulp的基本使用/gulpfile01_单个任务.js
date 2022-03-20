const gulp = require('gulp');

// 定义任务
const foo = (cb) => {
  console.log("foo");
  cb();
}


// gulp4之前, 定义任务的方式
gulp.task("bar", (cb) => {
  console.log("bar");
  cb();
})

// 是不是任务
const abc = (cb) => {
  cb();
}

module.exports = {
  foo
}

// 默认任务
module.exports.default = (cb) => {
  console.log("default task");
  cb();
}
