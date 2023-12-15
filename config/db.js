import { Sequelize } from "sequelize";

const db = new Sequelize({
   dialect: 'mysql', // Change this to 'postgres' if using PostgreSQL
    username: 'izzul',
    password: 'izzul',
    database: 'setravel_db',
    host: '34.101.149.181', // Replace with your Cloud SQL instance IP
    port: '3306', // Replace with your Cloud SQL instance port
    socketPath: '/cloudsql/capstone-setravel:asia-southeast2:setravel',
    logging: false // Set to true to log SQL queries (optional)
});

//const db = new Sequelize('setravel_db', 'admin_project', '',{
//    host: "localhost",
//    dialect: "mysql"
//});

// const db = new Sequelize('citiesdb', 'root', '',{
//     host: "localhost",
//     dialect: "mysql"
// });


export default db;
