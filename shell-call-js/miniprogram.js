// 打印所有参数
console.log('打印所有参数:');
process.argv.forEach((index, value) => console.log(index, value));
// 获取传递的参数
var cp1 = process.argv[2];
var cp2 = process.argv[3];
console.log('打印传递的参数: ' + cp1 + ' ' + cp2);