const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('index', {title : 'Main'})
})
router.get('/login', (req, res)=>{
    res.render('login', {title : 'Login'})
})
router.get('/join', (req, res)=>{
    res.render('join', {title : 'Join'})
})
module.exports = router