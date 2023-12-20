import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const db = new Sequelize({
   dialect: 'mysql', 
    username: 'izzul',
    password: 'izzul',
    database: 'setravel_db',
    host: '34.101.149.181', 
    port: '3306', 
    socketPath: '/cloudsql/capstone-setravel:asia-southeast2:setravel',
    logging: false 
});

export default db;
