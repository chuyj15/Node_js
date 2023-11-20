const fs = require('fs');
console.log('시작');
fs.readFile('./test1.txt', (err, data) => {
if (err) {
throw err;
}
console.log('1번', data.toString());
});
fs.readFile('./test2.txt', (err, data) => {
if (err) {
throw err;
}
console.log('2번', data.toString());
});
fs.readFile('./test3.txt', (err, data) => {
if (err) {
throw err;
}
console.log('3번', data.toString());
});
console.log('끝');

// 1번 2번 3번 순서가 다 다름 끝도 다름
//비동기로는 순서를 보장할 수 없다!

// 시작
// 끝
// 1번 
// 2번 
// 3번