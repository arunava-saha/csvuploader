const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectdb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected: ", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectdb;