const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

dotenv.config();   //이걸 통해 process.env.PORT를 사용할 수 있습니다. 
//dotenv가 활성화됩니다. 

const app = express();
app.set('port', process.env.PORT || 3001);

//중요 여기서 싱크가 됨. 
//데이터베이스 테이블 생성 또는 동기화
sequelize.sync({ force: false }) //true하면 강제로 재생성 합니다. 
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

//미들웨어 설정
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

//서버 실행
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});