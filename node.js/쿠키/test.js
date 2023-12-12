const http = require('http');
const fs = require('fs').promises;
const path = require('path');
//디폴트 매개변수(기본 매개변수)
const parseCookies = (cookie = '') =>
    cookie           //ex) cookie1=value1;cookie2=value2;
        .split(';')     // [0] cookie1=value1 [1] cookie2=value2
        .map(v => v.split('=')) //[0] cookie1 [1] value1 [0] cookie2 [1] value2
        //구조 분해 할당
        .reduce((acc, [k, v]) => {    
            acc[k.trim()] = decodeURIComponent(v);
            // acc[cookie1] = value1
            // acc[cookie2] = value2
            return acc;
        }, {});


http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie); // { mycookie: 'test' }
    //cookies[cookie1]     cookies[cookie2]
    // 주소가 /login으로 시작하는 경우
    if (req.url.startsWith('/login')) {
        const url = new URL(req.url, 'http://localhost:8080');
        const name = url.searchParams.get('name');
        const expires = new Date();
        // 쿠키 유효 시간을 현재시간 + 5분으로 설정
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, {
            Location: '/',  //응답시에 다시 어떤 경로로 가는지 지정해줌
            'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
        // name이라는 쿠키가 있는 경우
        //cookies.name 과 cookies['name'] 과 같음 
        //추가
    }
     else if (cookies.name) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`${cookies.name}님 안녕하세요`);
    } else {
        try {
            const data = await fs.readFile(path.join(__dirname, 'cookie.html'));
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(err.message);
        }
    }
})
    .listen(8080, () => {
        console.log('8080번 포트에서 서버 대기 중입니다!');
    });