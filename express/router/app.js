// 모듈 import
const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')
const nunjucks = require('nunjucks')

// 라우터 import
const indexRouter = require('./routes/index') //js파일
const userRouter = require('./routes/users')
const boardRouter = require('./routes/board')
const readRouter = require('./routes/read')

// 미들웨어 설정
const app = express()
const port = 3000
app.set('port', port)
app.use(morgan('dev'))

//템플릿 설정
app.set('view engine', 'html')
nunjucks.configure('views', {express: app, watch: true,})

// 정적 파일 경로 지정
app.use('/', express.static(path.join(__dirname, 'public')))  //__dirname : 뒤에 나오는게 파일인지 경로인지 알려주는 역할
app.use(express.json()) //바디에있는 걸 제이슨으로 변환해준다
// app.use(express.url)
app.use(express.urlencoded({extended : false}))
app.use(cookieParser())
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// 라우터 설정
app.use('/', indexRouter)
app.use('/', userRouter)
app.use('/board', boardRouter)
app.use('/board', readRouter)

//위에 매핑되지 않은 나머지요청들은 404처리해주기
app.use( (req, res, next)=>{ res.status(404).send('NOT FOUND') } )
// 에러 핸들러
app.use( (err, req, res, next)=>{
    console.error(err)
    res.status(500).send(err.message)
} )

// 포트 설정 및 요청 대기
app.listen(app.get('port'), ()=>{ console.log( app.get('port'), '번 포트에서 대기 중') })
