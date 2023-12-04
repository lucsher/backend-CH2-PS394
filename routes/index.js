import express from "express";
import {getUsers, Register, Login, Logout} from "../controller/users.js"
import { verifyToken } from "../middleware/verifytoken.js";
import { refreshToken } from "../controller/refreshtoken.js";

const router = express.Router();

router.get('/users',verifyToken,getUsers);
router.post('/register',Register);
router.post('/login',Login);
router.get('/token',refreshToken);
router.delete('/logout',Logout);

export default router;
