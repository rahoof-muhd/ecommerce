import mongoose from "mongoose";


const schema = new mongoose.Schema({
    sellerId: {
        type: String,
        required: true,
        unique: false
    },
    sellerName: {
        type: String,
        required: true,
        unique: false
    },
    itemname: {
        type: String,
        required: true,
        unique: false
    },
    category: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
        unique: false
    },
    price: {
        type: Number,
        required: true,
        unique: false
    },
    products: {
        type: String,
        required: true,
        unique: false
    }
});

export default mongoose.model.Items || mongoose.model("Item", schema);