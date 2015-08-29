var gulp = require('gulp');
    gutil = require('gulp-util');

//Default task do nothing
gulp.task('default',function(){
    //code goes here
    log('Message printed on console window');
});


/// -- log function -- /// 
function log(msg) {
    gutil.log(gutil.colors.green(msg));
}
