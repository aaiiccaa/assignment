const mongoose = require('mongoose');


const uri = "mongodb+srv://aishafarizka:adidanai@cluster0.agdbm.mongodb.net/digistar";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectDB() {
    try {
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
}

async function disconnectDB() {
    try {
        await mongoose.disconnect();
        console.log('MongoDB disconnected successfully');
    } catch (error) {
        console.error('MongoDB disconnection error:', error);
        process.exit(1); // Exit process with failure
    }
}



module.exports = {
    connectDB,
    disconnectDB
};