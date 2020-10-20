const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    descrition: {
        type: String,
        required: true,
        maxlength: 200
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    quantity: {
        type: Number
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    shipping: {
        type: Boolean,
        required: false,
    },
}, {timestamps: true});


module.exports = mongoose.model('Product', productSchema);