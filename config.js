const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://Maissa:wizards@wizards.7xj56ro.mongodb.net/");
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = connectDB;
