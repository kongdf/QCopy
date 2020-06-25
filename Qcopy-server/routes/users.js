const router = require('koa-router')()

const userService = require('../db/mysqlconfig');
var UUID = require('uuid');

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = ''
})

router.post('/isusername', async (ctx, next) => {

  let arr = []
  arr.push(JSON.parse(ctx.request.body)['username']);

  await userService.IsUser(arr).then(data => {

    if (data.length > 0) {
      ctx.body = {
        StatusCode: '000000',
        Status: '1'
      }
    } else {
      ctx.body = {
        StatusCode: '000000',
        Status: '0'
      }
    }
  }).catch(() => {
    ctx.body = {
      StatusCode: '100001',
      StatusMsg: '连接失败'
    }
  })
})



router.post('/addUserData', async (ctx, next) => {

  let arr = []
  arr.push(JSON.parse(ctx.request.body)['username']);
  arr.push(JSON.parse(ctx.request.body)['pwd']);
  arr.push(UUID.v1());
  await userService.addUserData(arr).then(data => {
    console.log(data)
    ctx.body = {
      StatusCode: '000000',
    }
  }).catch(() => {
    ctx.body = {
      StatusCode: '100001',
      StatusMsg: '连接失败'
    }
  })
})


router.post('/userLogin', async (ctx, next) => {

  let arr = []
  arr.push(JSON.parse(ctx.request.body)['username']);
  let ParamsPwd=JSON.parse(ctx.request.body)['pwd'];
  console.log(arr[0])
  await userService.IsUser(arr[0]).then(data => {
    if(ParamsPwd==data[0].pwd){
      delete data[0].pwd
      ctx.body = {
        StatusCode: '000000',
        data
      }
    }else{
      ctx.body = {
        StatusCode: '100002',
      }
    }
  }).catch(() => {
    ctx.body = {
      StatusCode: '100001',
      StatusMsg: '连接失败'
    }
  })
})

module.exports = router