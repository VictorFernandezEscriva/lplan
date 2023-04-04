import { ObjectId } from "mongoose";

export interface Publication extends Comment {
    idUserPublication: ObjectId,
    likesPublication?: ObjectId[],
    textPublication?: string,
    photoPublication: string[],
    commentsPublication?: ObjectId[],
}