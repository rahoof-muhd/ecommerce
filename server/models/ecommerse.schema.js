import mongoose from "mongoose";


const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    image: {
        type: String,
        required: false,
        unique: false
    },
    email: {
        type: String,
        required: false,
        unique: false
    }
});

export default mongoose.model.Ecommerces || mongoose.model("Ecommerce", schema);