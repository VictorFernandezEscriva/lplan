import { ObjectId } from "mongoose";
import { Auth } from "./auth.interface";

export interface User extends Auth {
    nameUser: string;
    surnameUser: string;
    photoUser: ImageBitmap;
    birthdateUser: Date;
    genderUser: "male" | "female";
    ocupationUser?: string;
    descriptionUser: string;
    roleUser: "admin" | "common" | "verified" | "business";
    privacyUser: boolean;
    deletedUser: boolean;
    followersUser?: ObjectId[];
    followedUser?: ObjectId[];
}