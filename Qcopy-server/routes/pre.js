const router = require('koa-router')()

const userService = require('../db/mysqlconfig');


router.prefix('/sentcon')

router.get('/', function (ctx, next) {
    ctx.body = '1'
})
router.post('/addSentcon', async (ctx, next) => {
    let arr = []
    arr.push(JSON.parse(ctx.request.body)['sentcon']);
    arr.push(JSON.parse(ctx.request.body)['binduid']);
    let nowtime = new Date()
    arr.push(nowtime);
    await userService.addPre(arr).then(data => {
        if (data.affectedRows) {
            ctx.body = {
                StatusCode: '000000',
            }
        }
    }).catch(() => {
        ctx.body = {
            StatusCode: '100001',
            StatusMsg: '连接失败'
        }
    })
})

router.post('/SentconList', async (ctx, next) => {

    let arr = []
    arr.push(JSON.parse(ctx.request.body)['binduid']);
    arr.push(JSON.parse(ctx.request.body)['keyword']);
    console.log(arr)
    await userService.sendList(arr[0], arr[1]).then(data => {
        ctx.body = {
            StatusCode: '000000',
            data
        }
    }).catch(() => {
        ctx.body = {
            StatusCode: '100001',
            StatusMsg: '连接失败'
        }
    })
})

router.post('/SentconEdit', async (ctx, next) => {

    let arr = []
    arr.push(JSON.parse(ctx.request.body)['sentcon']);
    arr.push(JSON.parse(ctx.request.body)['sentId']);
    arr.push(JSON.parse(ctx.request.body)['binduid']);
    // console.log(arr)
    await userService.editSend(arr[0], arr[1], arr[2]).then(data => {

        if (data.affectedRows) {
            ctx.body = {
                StatusCode: '000000',
            }
        }
    }).catch(() => {
        ctx.body = {
            StatusCode: '100001',
            StatusMsg: '连接失败'
        }
    })
})
router.post('/SentconDel', async (ctx, next) => {

    let arr = []
    arr.push(JSON.parse(ctx.request.body)['sentId']);
    arr.push(JSON.parse(ctx.request.body)['binduid']);
    // console.log(arr)
    await userService.DelSend(arr[0], arr[1]).then(data => {
        // console.log(data)
        if (data.affectedRows) {
            ctx.body = {
                StatusCode: '000000',
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