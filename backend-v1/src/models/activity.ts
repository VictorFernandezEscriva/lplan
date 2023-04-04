import { Activity } from './../interfaces/activity.interface';
import {  Schema, Types, model, Model } from "mongoose";


const ActivitySchema = new Schema<Activity>(
    {
        nameActivity:{
            type: String,
            required:true,
        },
        creatorActivity:{
            type: Schema.Types.ObjectId,
            ref:'users',
            required: true,
        },
        participantsActivity:{
            type: [Schema.Types.ObjectId],
            ref: 'users',
            required: true,
        },
        photoActivity:{
            type: [String],
            required:false,
        },
        dateActivity:{
            type: String,
            required: true,
        },
        hoursActivity:{
            type: [String],
            required: true,
        },
        descriptionActivity:{
            type: String,
            required:true,
        },
        privacyActivity:{
            type: Boolean,
            required:true,
        },
        roleActivity:{
            type: String,
            enum:["verificado","common", "empresa"],
            required:true,
        },
        idLocation:{
            type: Schema.Types.ObjectId,
            ref:'locations',
            required:false,
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
const ActivityModel = model('activities', ActivitySchema);

export default ActivityModel;