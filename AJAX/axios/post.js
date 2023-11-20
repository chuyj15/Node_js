const axios = require('axios')
const url = 'https://httpbin.org/post'
const data = {name : '김조은', age : 28}
const headers = { 'Content-Type' : 'application/json' }
//axios POST 요청
axios.post(url, data, headers)
    .then(response => { console.log('Response : ', response.data)})
    .catch(error=>{console.log('error:', error)})