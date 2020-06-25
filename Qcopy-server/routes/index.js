const router = require('koa-router')()
const userService = require('../db/mysqlconfig');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post('/userLogin', async (ctx, next) => {


  let arr = []
  console.log(JSON.parse(ctx.request.body)['username'])
  // let pwd = (JSON.parse(ctx.request.body)['pwd'])
  arr.push(JSON.parse(ctx.request.body)['username'])

  await userService.IsUser(arr).then(data => {

    ctx.body = {
      StatusCode: '000001',
      Status: '1',
      data
    }
  }).catch(() => {
    ctx.body = {
      StatusCode: '100001',
      StatusMsg: '连接失败'
    }
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
