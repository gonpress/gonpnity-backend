import { createQueryBuilder } from "typeorm";
import BoardEntity from "../entity/boardEntity.js";

class BoardService {
    getBoards = async() => {
        return await createQueryBuilder(BoardEntity).getMany();
    }

    getBoardById = async(id) => {
        return await createQueryBuilder(BoardEntity).where('id = :id', {id}).getOne();
    }

    createBoard = async(data) => {

        if(data){
            const nowTime = new Date();
            data.created_at = data.created_at || nowTime;
            data.updated_at = data.updated_at || nowTime;

            console.log('create board :', data);
        }

        const user = await createQueryBuilder(BoardEntity).insert().values(data).execute();
        return user;
    }
}

export default new BoardService();