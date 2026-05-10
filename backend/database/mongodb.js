import mongoose from 'mongoose';
import { MONGODB_URL, NODE_ENV} from '../config/env.js';

if(!MONGODB_URL){
    console.error('MONGODB_URL is not defined in enviroment variable');
    process.exit(1);
}

const connectDB = async ( ) => {
    try{
        await mongoose.connect(MONGODB_URL);

        console.log(`Connect to MongoDB in ${NODE_ENV} enviroment`);

    }catch(error){
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
}
export default connectDB;