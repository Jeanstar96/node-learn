// 模块学习

/**  HTTP 模块
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.end('hello,node!');
}).listen(8000);
console.log('服务器运行于http://localhost:8000')

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('进程已终止')
  })
})
*/

// 如何退出node.js程序
//process.exit(1);
//process.kill(process.pid, 'SIGTERM')

// 读取环境变量
// process.env.NODE_ENV

// 命令行传参
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`)
// })

//console.log(require('minimist')(process.argv.slice(2)))

/**  异步
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('应该在 baz 之后、bar 之前')
  ).then(resolve => console.log(resolve))
  baz()
}

foo()
 */

/** Async&&Await
const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('做些事情'), 3000)
  })
}

const doSomething = async () => {
  console.log(await doSomethingAsync())
}

console.log('之前')
doSomething()
console.log('之后')
 */

 
