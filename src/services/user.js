import User from '../models/user.js';

async function createUser(user) {
    await User.create(user);
}

async function getAllUsers() {
    return await User.find({
        active: true,
        deleted: false,
    });
}

async function getUserById(id) {
    return await User.findById(id, {
        active: true,
        deleted: false,
    })
}

async function deleteUser(id) {
    await User.findByIdAndUpdate(id, {deleted: true});
}

async function updateUser(id, user) {
    await User.findByIdAndUpdate(id, user);
}

async function getUserByEmail(email) {
    return await User.findOne({
        email,
        deleted: false
    })
}

export {
    getUserByEmail,
    createUser,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser
}