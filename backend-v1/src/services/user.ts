//In charge to connect with the dB
import { Types } from "mongoose";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

const insertUser = async(item: User) => {
    const responseInsert = await UserModel.create(item);
    return responseInsert;
};

const getUsers = async() => {
    const responseItem = await UserModel.find({});
    return responseItem;
};

const getUser = async(id: string) => {
    const responseItem = await UserModel.findOne({_id: id});
    return responseItem;
};

const updateUser = async(id: string, data: User) => {
    const responseItem = await UserModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const deleteUser = async(id: string) => {
    const responseItem = await UserModel.findOneAndRemove({_id: id});
    return responseItem;
}

const getAllFollowers = async (userId: string) => {
    
    const follower=await UserModel.findById(userId).populate('followersUser');
    if(!userId){
        throw new Error(`User with ID ${userId} not found`);
    }
    return follower?.followersUser;
  };
  
  const getAllFollowed = async (userId: string) => {
    const followed = await UserModel.findById(userId).populate('followedUser');
    if (!userId) {
      throw new Error('User not found');
    }
    return followed?.followedUser;
  };
  const addFollower = async (idUser: string, idFollower: string) => {
    const responseItem=await UserModel.findOneAndUpdate(
        {_id:idUser},
        {$addToSet:{followersUser:new Types.ObjectId(idFollower)}},
        {new:true}
    ).populate('followersUser');
    console.log(responseItem);
    return responseItem;
  };

  const addFollowed = async (idUser: string, idFollower: string) => {
    const responseItem=await UserModel.findOneAndUpdate(
        {_id:idUser},
        {$addToSet:{followedUser:new Types.ObjectId(idFollower)}},
        {new:true}
    ).populate('followedUser');
    console.log(responseItem);
    return responseItem;
    };
export {insertUser, getUser, getUsers, updateUser, deleteUser, getAllFollowed, getAllFollowers,addFollower,addFollowed};
