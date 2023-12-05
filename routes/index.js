import express from "express";
import {getUsers, Register, Login, Logout} from "../controller/users.js"
import { verifyToken } from "../middleware/verifytoken.js";
import { refreshToken } from "../controller/refreshtoken.js";
import { getAllCities, getAllCategories, getCity, getCategory, getPlaceName, getAllPlace } from "../controller/data.js";

const router = express.Router();

router.get('/users',verifyToken,getUsers);
router.post('/register',Register);
router.post('/login',Login);
router.get('/token',refreshToken);
router.delete('/logout',Logout);

router.get('/cities', getAllCities)
router.get('/categories', getAllCategories)
router.get('/cities/:city', getCity)
router.get('/categories/:category', getCategory)
router.get('/place', getAllPlace)
router.get('/place/:name', getPlaceName)
export default router;
