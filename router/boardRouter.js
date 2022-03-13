import express from 'express';
import {getBoards, getBoardById, createBoard} from "../controllers/boardController.js";

const router = express.Router();

// 게시판 최신 글 가져오기, 20개씩
router.get('/', getBoards)

// 게시판 글 상세내용 가져오기
router.get('/:id', getBoardById)

// 게시판 글 등록하기
router.post('/', createBoard)

// 게시판 글 삭제하기

export default router;