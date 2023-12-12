const express = require('express')
const router = express.Router()

router.get('/read', (req, res)=>{
   // res.send('Main')
   res.render('board/read')
})

module.exports = router