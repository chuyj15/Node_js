//동기식  파일 입력
// - readFileSync()
const fs = require('fs');
console.log('시작');
let data = fs.readFileSync('./test1.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./test2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./test3.txt');
console.log('3번', data.toString());
console.log('끝');

//동기식. 순서대로 하고 싶다~!
//시작
// 1번 
// 2번
// 3번
// 끝