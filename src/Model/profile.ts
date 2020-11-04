import * as mongoose from 'mongoose'

export const ProfileSchema = new mongoose.Schema({
    image: { type: String},
    owner: { type :  mongoose.Schema.Types.ObjectId, ref:"User"},
})