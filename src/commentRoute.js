const express = require('express')
const router = express.Router()

const commentList = require('./commentMock')

router.get('/commentList',function(req,res,next){
  res.json(commentList.mockCommentList())
})

router.get('/commentOne', function (req, res, next) {
  res.json(commentList.mockCommentOne())
})
module.exports = router