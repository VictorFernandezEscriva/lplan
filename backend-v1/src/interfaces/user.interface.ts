import { ObjectId } from "mongoose";
import { Auth } from "./auth.interface";

export interface User extends Auth {
    nameUser: string;
    surnameUser: string;
    birthdateUser: string;
    genderUser: "masculino" | "femenino";
    mailUser: string;
    ocupationUser?: string;
    passwordUser: string;
    descriptionUser: string;
    roleUser: "admin" | "common";
    privacyUser: boolean;
    followersUser?: ObjectId[];
    followedUser?: ObjectId[];
}