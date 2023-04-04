import { Response } from 'express';
import { ObjectId } from "mongoose";

export interface Comment{
    idUserComment:ObjectId,
    textComment:string,
    likesComment?:ObjectId[],
    responseComment?:ObjectId[],
    dateComment: Date
}