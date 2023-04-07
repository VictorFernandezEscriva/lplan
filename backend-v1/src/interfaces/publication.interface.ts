import { ObjectId } from "mongoose";

export interface Publication extends Comment {
    idUserPublication: ObjectId,
    likesPublication?: ObjectId[],
    textPublication?: string,
    photoPublication: string[] // Aquí van las fotos de las publicaciones.
}