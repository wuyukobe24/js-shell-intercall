// Nodejs下引入模块child_process实现调用shell
var child = require('child_process');

let appid = 'id123'
let appname = "小程序"
let command = 'bash ./test.sh ' + appid + ' ' + appname
// 调用shell脚本并传参数
child.exec(command, function(err, sto) {
    // sto才是真正的输出
    console.log('sto: ' + sto);
})
