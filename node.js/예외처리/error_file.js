const fs = require('fs').promises //Promise 기반
setInterval( ()=>{
   //Promise 방식
   fs.unlink('./test.js').catch(console.error)
}, 1000 )