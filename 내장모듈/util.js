const util = require('util');
// 1. promisify
const fs = require('fs');
const readFile = util.promisify(fs.readFile);   //콜백 기반 -> Promise 기반
readFile('example.txt', 'utf8')
.then((data) => console.log('File content:', data))    //안녕ㅇ안녕 (example.txt파일 안에 들어있는 문구)
.catch((error) => console.error('Error reading file:', error));
            // [Error: ENOENT: no such file or directory, open 'D:\cyj\Node_js_git\Node_js\내장모듈\example.txt'] {
            //     errno: -4058,
            //     code: 'ENOENT',
            //     syscall: 'open',
            //     path: 'D:\\cyj\\Node_js_git\\Node_js\\내장모듈\\example.txt'
            // }
// 2. inherits
function Base() {
this.name = 'Base';
}
function Child() {
Base.call(this);
this.name = 'Child';
}
// Base <- Child 
// - 부모클래스 : Base
// - 자식클래스 : Child
util.inherits(Child, Base);
const childInstance = new Child();
console.log('Child name:', childInstance.name); //Child
// 3. format
const message = util.format('%s %s', 'Hello', 'World');
console.log('Formatted message:', message); //Hello World
// 4. inspect
const obj = { name: 'John', age: 30 };
const str = util.inspect(obj);
console.log('Inspect result:', str); // { name: 'John', age: 30 }