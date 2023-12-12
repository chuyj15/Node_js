//이벤트 모듈 import
const EventEmitter = require('events');
//EventEmitter(이벤트 발생자) 객체 생성
const myEvent = new EventEmitter();

//이벤트 리스너 등록
//이벤트 발생자 객체.addListener('이벤트명', ()=>{})
myEvent.addListener('event1', () => {
console.log('이벤트 1');
});
//이벤트객체.on('이벤트명', ()=>{})
myEvent.on('event2', () => {
console.log('이벤트 2');
});

myEvent.on('event2', () => {
console.log('이벤트 2 추가');
});
//이벤트객체.once('이벤트명', ()=>{})
//이벤트 발생 시, 한 번만 실행됨
myEvent.once('event3', () => {
console.log('이벤트 3');
}); // 한 번만 실행됨

myEvent.emit('event1'); // 이벤트 호출   ->   이벤트1
myEvent.emit('event2'); // 이벤트 호출   ->   이벤트2 추가
myEvent.emit('event3'); // onse라서, 한번만 이벤트 호출이 가능함. 
myEvent.emit('event3'); // 실행 안 됨

myEvent.on('event4', () => {
console.log('이벤트 4');
});
// 이벤트리스너 제거
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 실행 안 됨
const listener = () => {
console.log('이벤트 5');
};
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5'); // 실행 안 됨
console.log(myEvent.listenerCount('event2'));   // 2 (2번 정의했으니깐)

