const gulp = require('gulp')
const gls = require('gulp-live-server')

gulp.task('dev', function(){
  const server = gls.new('./src/server.js')
  gulp.watch('./src/commentMock.js',function(){
    server.start.bind(server)()
  })
  return server.start()
})