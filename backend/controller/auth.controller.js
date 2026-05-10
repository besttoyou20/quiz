import mongoose from "mongoose";
import User from '../models/user.models.js';
import {JWT_SECRET, JWT_EXPIRES_IN} from '../config/env.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';

//register
export const register = async (req, res, next) => {
    try{
        const { name, email, password } = req.body;
        
        if ( !name || !email || !password){
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            })
        }
        //validator
        if(!validator.isEmail(email)){
            return res.status(400).json({
                success: false,
                message: 'Invalid email format'
            })
        }
        if(password.length < 6){
            return res.status(400).json({
                success: false,
                message: 'Password must be at least 6 characters'
            })
        }

        //check user udah ada apa belum
        const existUser = await User.findOne({ email });
        if(existUser){
            const error = new Error('User already exists');
            error.statusCode = 409;
            throw error;
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //buat user baru
        const newUser = new User({name, email, password: hashedPassword});
        await newUser.save();

        //generate token
        const token = jwt.sign({
            userId: newUser._id,
        }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        const responseUser = {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            roles: newUser.roles
        }
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: responseUser,
            token
        })
    }catch(error){
        next(error);
    }
}

//Login
export const login = async (req, res, next) => {
    try{
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            })
        }

        //check user udah ada apa belum
        const user = await User.findOne({ email });

        if(!user){
            const error = new Error('Invalid email or password');
            error.statusCode = 404;
            throw error;
        }

        //check passwordd
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            const error = new Error('Invalid email or password');
            error.statusCode = 401;
            throw error;
        }

        //generate token dan sesuai roles
        const token = jwt.sign({
            userId: user._id,
            roles: user.roles,
        }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        const responseUser = {
            _id: user._id,
            name: user.name,
            email: user.email,
            roles: user.roles
        }
        res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            user: responseUser,
            token
        })
    }catch(error){
        next(error);
    }
}
