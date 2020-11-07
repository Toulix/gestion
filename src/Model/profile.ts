import * as mongoose from 'mongoose'

export const ProfileSchema = new mongoose.Schema({
    owner: { type :  mongoose.Schema.Types.ObjectId, ref:"User"},
})



//Radoniaina Maria
//16 juin 2003
//Ambodirano


