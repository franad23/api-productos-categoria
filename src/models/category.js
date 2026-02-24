import mongoose from "mongoose";

const Category = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

export default mongoose.model('Category', Category);