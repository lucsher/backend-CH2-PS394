import { Sequelize } from "sequelize";


const db = new Sequelize({
   dialect: 'mysql', 
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST, 
    port: '3306', 
    socketPath: process.env.SOCKET,
    logging: false 
});

export default db;
