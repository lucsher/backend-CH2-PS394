import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) =>{

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token==null) return res.sendStatus(401);
    jwt.verify(token, sup02i2bnqs9zmxulin0o3mshky8tujhude0k3bdrmxuv3bg3s3pqikdyof1v197, (err, decoded) =>{
        if(err) return res.sendStatus(403);
        req.email = decoded.email;
        next();
    })
}
