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

const getUsersPag = async( numPage: string) => {
  const usersPorPagina = 2;
  const salto = (parseInt(numPage,10) - 1) * usersPorPagina;
  const responseItem = await UserModel.find({}).skip(salto).limit(usersPorPagina).exec();//Saltar las localizaciones ya vistas, presentar las de su pagina correspondiente
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


const getAllFollowers = async (userId: string, numPage:string) => {
    const usersPorPagina = 2;
    const salto = (parseInt(numPage) - 1) * usersPorPagina;
    const follower=await UserModel.findById(userId);
    if(!userId){
        throw new Error(`User with ID ${userId} not found`);
    }
    const userFollowers = follower?.followersUser
    if(!userFollowers || userFollowers.length ===0){
      return [];
    }
    const responseItem = await UserModel.find({_id: { $in: userFollowers }}).skip(salto).limit(usersPorPagina).exec();
    return responseItem;
};
  
  const getAllFollowed = async (userId: string, numPage:string) => {
    const usersPorPagina = 2;
    const salto = (parseInt(numPage) - 1) * usersPorPagina;
    const followed = await UserModel.findById(userId);
    if (!userId) {
      throw new Error('User not found');
    }
    const userFollowed = followed?.followedUser
    if(!userFollowed || userFollowed.length ===0){
      return [];
    }
    const responseItem = await UserModel.find({_id: { $in: userFollowed }}).skip(salto).limit(usersPorPagina).exec();
    return responseItem;
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

    const removeFollowed = async (idUser: string, idFollowed: string) => {
        const responseItem = await UserModel.findOneAndUpdate(
          {_id: idUser},
          {$pull: {followedUser: new Types.ObjectId(idFollowed)}},
          {new: true}
        ).populate('followedUser');
        if (!responseItem) {
          throw new Error('User not found');
        }
        return responseItem;
      };
      const removeFollower = async (idUser: string, idFollower: string) => {
        const responseItem = await UserModel.findOneAndUpdate(
          {_id: idUser},
          {$pull: {followersUser: new Types.ObjectId(idFollower)}},
          {new: true}
        ).populate('followersUser');
        console.log(responseItem);
        if (!responseItem) {
          throw new Error('User not found');
        }
        
        return responseItem;
      };
      const getCountUser = async() => {

        const responseItem = (await UserModel.countDocuments({})).toString();
        return responseItem;
    };

export {getCountUser,insertUser, getUser, getUsers, updateUser, deleteUser, getAllFollowed, getAllFollowers,addFollower,addFollowed,removeFollowed,removeFollower,getUsersPag};
