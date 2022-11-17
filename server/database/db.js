import mongoose from 'mongoose';
const Connection = async (MONGOURI) => {
    try {
        await mongoose.connect(MONGOURI, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;