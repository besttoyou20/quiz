import jwt from 'jsonwebtoken';
import User from '../models/user.models.js';
import { JWT_SECRET } from '../config/env.js';

export const authMiddleware = async (req, res, next ) => {
    try{
        let token;
        // check token dan mengambil tokennya saja contoh Beras abcdef yang diambil hanya abcdef saja
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1];
        }
        if(!token){
            return res.status(401).json({
                success: false,
                message: 'No token provided, authorization denied'
            })
        }

        //verifikasi token
        const decoded = jwt.verify(token, JWT_SECRET);

        //ambil user dari token
        const user = await User.findById(decoded.userId).select('-password');
        if(!user){
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
        req.user = user;
        next();
    }catch(error){
        return res.status(401).json({
            success: false,
            message: error.message
        })
    }
}

export const adminMiddleware = (req, res, next) => {
    if(req.user.roles !== 'admin'){
        return res.status(403).json({
            success: false,
            message: 'Access denied, admin only'
        })
    }
    next();
}