let Mock = require('mockjs')
let Random = Mock.Random;

function mockCommentList() {
  const data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 2 到 6 个元素
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'content': () => Random.ctitle(),
      'updateAt': () => Random.date()
    }]
  })

  return {
    commentList: data.list
  }
}

function mockCommentOne() {
  const data1 = Mock.mock({
    'list': [{
      'id': () => Random.natural(),
      'content': () => Random.ctitle(),
      'updateAt': () => Random.date()
    }]
  })

  return {
    commentList: data1.list
  }
}

module.exports= {
  mockCommentList,
  mockCommentOne
}