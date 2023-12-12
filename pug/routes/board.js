const express = require('express')
const router = express.Router()
const Board = require('../models/board')
const {Sequelize} = require(`sequelize`)
// let boardList = [
//     {title : '제목1', writer : '작성자1', content : '내용1'},
//     {title : '제목2', writer : '작성자2', content : '내용2'},
//     {title : '제목3', writer : '작성자3', content : '내용3'}
// ]

//게시글 목록
router.get('/list', async (req, res)=>{
    let boardList = await Board.findAll()
    console.log(boardList, '가 뭐야?')
    res.render('board/list', {boardList})
})
//게시글 등록
router.get('/insert', (req, res)=>{
    res.render('board/insert')
})
router.post('/insert', (req, res)=>{
    let {title, writer, content} = req.body
    let board = {title, writer, content}
    Board.create(board)
    res.redirect('/board/list')
})
//게시글 수정
router.get('/update/:id', async (req, res)=>{
    //let board = boardList[req.params.id]
    let id = req.params.id
    let board = await Board.findByPk(id)
    console.log(id)
    res.render('board/update', {board, id})
})
router.post('/update', async (req, res)=>{
    let {id, title, writer, content} = req.body
    console.log(`여기는~~~ ${id}, ${title}, ${writer}, ${content}`)
    let board = {title, writer, content, upd_date : Sequelize.literal(`now()`) }
    await Board.update(board, { where: {board_no : id}})
    res.redirect(`/board/${id}`)
})
//게시글 삭제
router.get('/del/:id', async (req, res)=>{
    let id = req.params.id
    //boardList.splice(id, 1)
    await Board.destroy({ where: { board_no : id} })
    res.redirect('/board/list')
})
//게시글 읽기
router.get('/:id', async (req, res)=>{
    let board = await Board.findByPk( req.params.id )
    console.log(`${board}를 보여줘`)
    res.render('board/read', {board, id : req.params.id })
})

module.exports = router