import {  Schema, Types, model, Model } from "mongoose";
import { Horario } from "../interfaces/subject.interface";

const HorarioSchema = new Schema<Horario>(
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

const HorarioModel = model('subjects', HorarioSchema);

export default HorarioModel;