import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()



const db = new Sequelize({
   dialect: 'mysql', // Change this to 'postgres' if using PostgreSQL
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST, // Replace with your Cloud SQL instance IP
    port: '3306', // Replace with your Cloud SQL instance port
    socketPath: '/cloudsql/capstone-setravel:asia-southeast2:setravel',
    logging: false // Set to true to log SQL queries (optional)
});
