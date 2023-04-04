import { ObjectId } from "mongoose";

export interface Comment{
    idUserComment: ObjectId,
    idPublicationComment: string,
    textComment: string,
    likesComment?: ObjectId[],
    responseComment?: ObjectId[],
    dateComment: Date
}