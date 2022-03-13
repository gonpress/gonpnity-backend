import BoardService from "../services/boardService.js";

export const getBoards = async(req, res) => {
    const result = await BoardService.getBoards();

    if (result) {
        res.json(result);
    } else {
        res.status(404).json('no data');
    }
}

export const getBoardById = async(req, res) => {
    const {id} = req.params;

    const result = await BoardService.getBoardById(id);
    if (result) {
        res.json(result);
    } else {
        res.status(404).json({msg:'no data'});
    }
}

export const createBoard = async(req, res)=>{
    const data = req.body;

    const result = await BoardService.createBoard(data);
    if (result) {
        res.json(result);
    } else {
        res.status(404).json({msg:'no data'});
    }
}