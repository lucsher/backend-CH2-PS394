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
    Price: {
        type: Sequelize.DECIMAL(10, 2)
    },
    Rating: {
        type: Sequelize.FLOAT
    }
},{
    tableName: 'destination',
    timestamps: false
});

export default Destination;
