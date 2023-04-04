import { ObjectId } from "mongoose";

export interface Publication extends Comment {
    idUserPublication:ObjectId,
    likesPublication?:ObjectId[],
    textPublication?:String,
    photoPublication:ImageBitmap[],
    commentsPublication?:ObjectId[],

}