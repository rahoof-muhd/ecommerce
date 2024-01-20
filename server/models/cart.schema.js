import mongoose from "mongoose";


const schema = new mongoose.Schema({
    Pid : {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    count: {
        type: String,
        required: true,
        unique: false
    }
});

export default mongoose.model.Cart || mongoose.model("Carts", schema);