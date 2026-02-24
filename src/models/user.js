import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    lastname: {
        type: String,
        required: [true, 'El apellido es requerido']
    },
    email: {
        type: String,
        required: [true, 'El email es requerido']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerido']
    },
    active: {
        type: Boolean,
        default: true,
    }, 
    deleted: {
        type: Boolean,
        default: false,
    },
    rol: {
        type: String,
    }
}, { timestamps: true });

export default mongoose.model('User', User);