import {  Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
    {
        
        nameUser:{
            type: String,
            required:true,
        },
        surnameUser:{
            type: String,
            required:true,
        },
        birthdateUser:{
            type: String,
            required:true,
        },
        mailUser:{
            type: String,
            required:true,
            unique: true,
        },
        genderUser:{
            type: String,
            enum:["masculino","femenino"],
            required:true,
        },
        ocupationUser:{
            type: String,
            required:false,
        }, 
        passwordUser:{
            type: String,
            required:true,
        },
        descriptionUser:{
            type: String,
            requiered:true,
        },
        privacyUser:{
            type: Boolean,
            required:true,
        },
        roleUser:{
            type: String,
            enum:["admin","common"],
            required:true,
        },
        followersUser:{
            type: [Schema.Types.ObjectId],
            ref:'users',
        },
        followedUser:{
            type: [Schema.Types.ObjectId],
            ref:'users',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
const UserModel = model('users', UserSchema);

export default UserModel;