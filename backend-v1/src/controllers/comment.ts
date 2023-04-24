import { Request,Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getCommentsPublication, postCommentPublication, getCountComment,postAnswerPublication, updateCommentPublication, deleteCommentPublication, getAllComments, getComment, updateLikes, getAllPaginatedComments, getResponsesOfComment } from "../services/comment";

// (1) Get (obtain) comments ...
const getComments=async({params}:Request,res:Response)=>{
    try{
        const {idPublication,numPage}=params;
        const response=await getCommentsPublication(idPublication, numPage); // "numPage" nos sirve para el "paginate".
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_COMMENTS");
    }
};

// (2) Post (creation) of a comment of a publication ...
const postComment=async ({body}:Request,res:Response)=>{
    try{
        const response=await postCommentPublication(body);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    }catch(e){
        handleHttp(res,"ERROR_POST_COMMENT");
    }
};

// (3) Post (creation) of an answer to a comment ...
const postAnswer=async ({params,body}:Request,res:Response)=>{
    try{
        const {idComment}=params;
        const response=await postAnswerPublication(idComment,body);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    }catch(e){
        handleHttp(res,"ERROR_POST_ANSWER");
    }
};

// (4) Put (edition) of a comment ...
const updateComment=async ({params,body}:Request,res:Response)=>{
    try{
        const {idComment}=params;
        const response=await updateCommentPublication(idComment,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_COMMENT");
    }
};

// (5) Delete comment ...
const deleteComment=async ({params}:Request,res:Response)=>{
    try{
        const {idComment}=params;
        const response=await deleteCommentPublication(idComment);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_COMMENT");
    }
};

// (6) Get all comments
const getAllAvailableComments=async(req:Request,res:Response)=>{
    try{
        const response=await getAllComments(); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_ALL_COMMENTS");
    }
};

// (7) Get (obtain) comment ...
const getOneComment=async({params}:Request,res:Response)=>{
    try{
        const {idComment}=params;
        const response=await getComment(idComment); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_THAT_COMMENT");
    }
};

// (8) Put (edition) user le da like a un comment ...
const updateLikesComment=async ({params}:Request,res:Response)=>{
    try{
        const {idComment, idUser}=params;
        const response=await updateLikes(idComment, idUser);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_LIKES");
    }
};

// (9) Get all paginated comments
const getAllPaginatedCommentsController=async({params}:Request,res:Response)=>{
    try{
        const {numPage}=params;
        const response=await getAllPaginatedComments(numPage); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_ALL_PAGINATED_COMMENTS");
    }
};

// (10) Get responses of a comment
const getResponsesOfParticularComment = async({params}:Request,res:Response)=>{
    try{
        const {idComment}=params;
        const {numPage}=params;
        const response=await getResponsesOfComment(idComment,numPage); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_THAT_COMMENT");
    }
};

const getCountComments=async(req:Request,res:Response)=>{
    try{
        const response=await getCountComment(); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_COUNT_COMMENTS");
    }
};

export{getCountComments,getComments,postComment,postAnswer,updateComment,deleteComment, getAllAvailableComments, getOneComment, updateLikesComment, getAllPaginatedCommentsController, getResponsesOfParticularComment};