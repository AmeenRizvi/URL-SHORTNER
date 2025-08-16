import { verifyToken } from "./helper.js";
import { findUserById } from "../dao/user.dao.js";

export const attachUser = async (req, res, next) => {
    const token = req.cookies.accessToken;
    console.log(token);
    if(!token){
        return next();
    }

    try{
        const decoded = await verifyToken(token);
        const user = await findUserById(decoded.id);
        if(!user){
            return next();
        }
        req.user = user;
        next();
    } catch(err) {
        console.error("Token verification failed:", err);
        next();
    }

}
