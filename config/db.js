import typeorm from "typeorm";
import ormconfig from "../ormconfig.js";

const connectDB = async () => {
    try{
        const conn = await typeorm.createConnection(ormconfig);
        console.log('connected database');
    } catch (e) {
        console.error(e)
        process.exit(1);
    }
}

export default connectDB;