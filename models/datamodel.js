import { Sequelize } from "sequelize";
import db from "../config/db.js";

const Destination = db.define('Destination', {
    Place_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },Place_Name: {
        type: Sequelize.STRING
    },
    Description: {
        type: Sequelize.TEXT
    },
    City: {
        type: Sequelize.STRING
    },
    Category: {
        type: Sequelize.STRING
    },
    Address: {
        type: Sequelize.TEXT
    },
    Location: {
        type: Sequelize.STRING
    },
    Price: {
        type: Sequelize.DECIMAL(10, 2)
    },
    Rating: {
        type: Sequelize.FLOAT
    },
    Potensi_bencana: {
        type: Sequelize.STRING
    },
    City_image: {
        type: Sequelize.FLOAT
    },
    Place_image: {
        type: Sequelize.FLOAT
    }
},{
    tableName: 'destination',
    timestamps: false
});

export default Destination;
