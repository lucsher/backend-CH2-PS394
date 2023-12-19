import Destination from "../models/datamodel.js";
import { Sequelize } from "sequelize";

export const getAllCities = async(req, res) => {
    try{
        const cities = await Destination.findAll({
            attributes: ['City', 'City_image'],
            group: ['City', 'City_image']
        });
        res.json(cities);
    }catch(error){
        console.log(error);
    }
}

export const getAllCategories = async(req, res) => {
    try{
        const categories = await Destination.findAll({
            attributes: ['Category'],
            group: ['Category']
        });
        res.json(categories);
    }catch(error){
        console.log(error);
    }
}

export const getCity = async (req, res) => {
    const city = req.params.city;

    try {
        const cityData = await Destination.findAll({
            where: {
                City: city
            },
            attributes: ['Place_Name', 'Description', 'Place_Image']
        });
        res.json(cityData);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "City not found" });
    }
};

export const getCategory = async (req, res) => {
    const category = req.params.category;

    try {
        const categoryData = await Destination.findAll({
            where: {
                Category: category
            },
            attributes: ['Place_Name', 'Description', 'Place_Image']
        });
        res.json(categoryData);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "Category not found" });
    }
};


export const getPlaceName = async (req, res) => {
    const name = req.params.name;

    try {
        const places = await Destination.findAll({
            where: {
                Place_Name: {
                    [Sequelize.Op.like]: `%${name}%`
                }
            },
            attributes: [
                'Place_Name',
                'Description',
                'City',
                'Category',
                'Address',
                'Location',
                'Price',
                'Rating',
                'Place_Image'
            ]
        });
        res.json(places);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getAllPlace = async(req, res) => {
    try{
        const places = await Destination.findAll({
            attributes: ['Place_Name', 'Description', 'Place_image'],
            group: ['Place_Name', 'Description', 'Place_image']
        });
        res.json(places);
    }catch(error){
        console.log(error);
    }
}
