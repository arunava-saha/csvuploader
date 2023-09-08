/** ------------------ IMPORTING MONGOOSE ------------------ **/
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    fileName: {
        type: String
    },
    filePath: {
        type: String
    },
    file: {
        type: String
    }
}, { timestamps: true });


/** ------------------ EXPORTING MODEL ------------------ **/
module.exports = mongoose.model("files", fileSchema);