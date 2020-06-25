var mysql = require('mysql');
var config = require('./dbconfig');

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});

let allServices = {
    query: function (sql, values) {

        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err)

                } else {
                    connection.query(sql, values, (err, rows) => {
                        console.log(rows, values, err, sql)

                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()
                    })
                }
            })
        })

    },
    IsUser: function (username) {
        let _sql = `select * from user where username = '${username}'`
        return allServices.query(_sql)
    },
    addUserData: (obj) => {
        let _sql = `insert into user set username=?,pwd=?,uid=?;`
        return allServices.query(_sql, obj)
    },
    sendList: function (uid, keyword) {
        let _sql = `select * from sent where binduid = '${uid}'  AND con like  '%${keyword}%' `
        return allServices.query(_sql, uid, keyword)
    },
    addPre(obj) {
        let _sql = `insert into sent set con=?,binduid=?,edittime=?;`
        return allServices.query(_sql, obj)
    },
    editSend: function (sentcon, sentId, binduid) {
        let _sql = `UPDATE sent SET con = '${sentcon}'  WHERE binduid = '${binduid}' and id=${sentId} `
        return allServices.query(_sql, sentcon, sentId, binduid)
    },
    DelSend: function (sentId, binduid) {
        let _sql = `DELETE FROM sent WHERE id = ${sentId} and binduid='${binduid}'`
        return allServices.query(_sql, sentId, binduid)
    },

}

module.exports = allServices;