import mongoose from "mongoose";

const connnectDb = async() => {
    try {
        const db = mongoose.connect(`${process.env.MONGODBURI}/${DB_NAME}`);
        console.log('\n MongoDB connected !!');
    } catch (error) {
        console.log('MongoDB failed to connect', error);
    }
}

export default connnectDb;