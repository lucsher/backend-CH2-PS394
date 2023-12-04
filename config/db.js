import { Sequelize } from "sequelize";

const db = new Sequelize('setravel_db', 'admin_project', '',{
    host: "localhost",
    dialect: "mysql"
});

export default db;
