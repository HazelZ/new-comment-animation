var express = require('express')
var app = express();
var cors = require('cors')

var commentRouter = require('./commentRoute')

app.use(cors())
app.options('*',cors())
app.use('/service/commentlist.do', commentRouter)

app.listen(3000, function () {
  console.log('listenging app on 3000')
})