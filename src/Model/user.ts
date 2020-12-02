import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    username : { type: String, required: true, unique: true},
    password: { type: String, required: true},
    roles: { type: String},
    profile: {type: mongoose.Schema.Types.ObjectId, required: false},
})