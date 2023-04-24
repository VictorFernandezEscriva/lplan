import { Request,Response } from "express";
import { insertUser,getUsers,getUser,updateUser,deleteUser, getAllFollowed, getAllFollowers, addFollowed,addFollower,removeFollowed,removeFollower, getUsersPag} from "../services/user";
import { handleHttp } from "../utils/error.handle";

const getPerson=async({params}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await getUser(idUser);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_USER");
    }
};

const getUsersPagCtrl=async({params}:Request,res:Response)=>{
    try {
        const {numPage}=params
        const response=await getUsersPag(numPage);
        res.send(response);
    } catch (e) {
        handleHttp(res,"ERROR_GET_USERS");
    }
}

const getPeople=async(req:Request,res:Response)=>{
    try{
        const response=await getUsers();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_USERS");
    }
};

const updatePerson=async ({params,body}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await updateUser(idUser,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_USER");
    }
};

const postPerson=async ({body}:Request,res:Response)=>{
    try{
        const responsePerson=await insertUser(body);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_POST_USER");
    }
};

const deletePerson=async ({params}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await deleteUser(idUser);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_USER");
    }
};



const getFollowersCtrl = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { numPage } = req.params;
    console.log(userId);

    try {
      const users = await getAllFollowers(userId, numPage);
      return res.status(200).json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
  };
  
  const getFollowedCtrl = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { numPage } = req.params;
    console.log(userId);
    try {
      const users = await getAllFollowed(userId, numPage);
      return res.status(200).json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
  };

  const follower = async ({body}:Request,res:Response) => {
    try{
        const{idUser,idFollower}=body;
        console.log(body);
        const response=await addFollower(idUser,idFollower);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_AL_AÑADIR");
    }
  };

  
  const followed = async ({body}:Request,res:Response) => {
    try{
        const{idUser,idFollowed}=body;
        console.log(body);
        const response=await addFollowed(idUser,idFollowed);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_AL_AÑADIR");
    }
  };

  const removeFollowedCtrl = async (req:Request,res:Response) => {
    try{
        const { idUser, idFollowed } = req.params;
        const response=await removeFollowed(idUser,idFollowed);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_AL_ELIMINAR");
    }
  };
  const removeFollowerCtrl = async (req:Request,res:Response) => {
    try {
        const { idUser, idFollower } = req.params;
        const response = await removeFollower(idUser, idFollower);
        res.send(response);
        console.log(response);
      } catch (e) {
        handleHttp(res, 'ERROR_DELETE_FOLLOWER');
      }
  };

export{getPerson,getPeople,postPerson,updatePerson,deletePerson,getFollowersCtrl,getFollowedCtrl,follower,followed,removeFollowerCtrl,removeFollowedCtrl,getUsersPagCtrl};