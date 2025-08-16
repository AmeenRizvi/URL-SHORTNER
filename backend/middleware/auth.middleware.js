import { verify } from "jsonwebtoken";
import { verifyToken } from "../src/utils/helper";
import { findUserByEmail } from "../src/dao/user.dao";

export const middleware = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = verifyToken(token);
        const user = await findUserByID(decoded);
        if(!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}