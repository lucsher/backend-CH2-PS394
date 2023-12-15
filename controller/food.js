
import { Sequelize } from "sequelize";
import Kuliner from "../models/kulinermodel.js";

export const getAllfood = async(req, res) => {
    try{
        const food = await Kuliner.findAll({
            attributes: ['nama_kuliner', 'description', 'jenis', 'asal_kota', 'image_url'],
            group: ['nama_kuliner']
        });
        res.json(food);
    }catch(error){
        console.log(error);
    }
}

export const getFoodName = async (req, res) => {
    const name = req.params.name;

    try {
        const food = await Kuliner.findAll({
            where: {
                nama_kuliner: {
                    [Sequelize.Op.like]: `%${name}%`
                }
            }
        });
        res.json(food);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}