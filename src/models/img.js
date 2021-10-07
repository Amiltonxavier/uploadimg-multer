import Sequelize from "sequelize";
import database from "../db/db";


const Img = database.define('img', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    filename: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descript: {
        type: Sequelize.STRING,
    },


});

export default Img;