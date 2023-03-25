import {  Schema, Types, model, Model } from "mongoose";
import { Publicacion } from "../interfaces/subject.interface";

const PublicacionSchema = new Schema<Publicacion>(
    {
        name:{
            type: String,
            required:true,
        },
        users:{
            type: [Schema.Types.ObjectId],
            ref:'users',
        },
        semester:{
            type: Number,
            required:true,
        },
        difficulty:{
            type: String,
            enum: ["easy", "medium", "hard"],
            required:true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const PublicacionModel = model('subjects', PublicacionSchema);

export default PublicacionModel;