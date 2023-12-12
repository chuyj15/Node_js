const express = require('express')
const path = require('path')
const morgan = require('morgan')
//시퀄라이저 쓰려고  추가
const dotenv = require('dotenv')
const { sequelize } = require('./models')
dotenv.config() //도텐브 활성화

//라우터 모듈 import
const indexRouter = require('./routes/index')
const boardRouter = require('./routes/board')

const app = express()

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
//정적 파일 제공 미들웨어 설정 : public 폴더를 정적 파일 제공 디렉토리로 설정
//app.use('/', express.static(path.join(__dirname, 'public')))

//중요(싱크)
sequelize.sync({ force: false }) 
        .then( ()=>{ console.log('데이터베이스 연결 성공~ app.js') } )
        .catch( (err)=>{ console.log(err) } )
        

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public' )))

//밑에 두개를 해줘야 바디에 담기네...?
app.use(express.json())
app.use(express.urlencoded( {extended: false} ))
//라우터 설정
app.use('/', indexRouter)
app.use('/board', boardRouter)

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}가 실행됩니다. `)
})
//신기하네 여기서 app.get('port')를 변수로 접근할 수가 있네...