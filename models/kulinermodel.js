import { Sequelize } from "sequelize";
import db from "../config/db.js";

const Kuliner = db.define('kuliner', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nama_kuliner:{
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    jenis: {
        type: Sequelize.STRING
    },
    asal_kota: {
        type: Sequelize.STRING
    },
    image_url: {
        type: Sequelize.TEXT
    },
},{
    tableName: 'kuliner',
    timestamps: false
    
});

export default Kuliner;
