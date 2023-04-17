//In charge to connect with the dB
import { ObjectId } from "mongoose";
import paginate from 'mongoose-paginate-v2';
import { Publication } from "../interfaces/publication.interface";
import PublicationModel from "../models/publication";



/*
// (1) Get (obtain) comments ...
const getCommentsPublication = async(idPublication: string, numPage: string) => {
    const comentariosPorPagina = 2;
    const salto = (parseInt(numPage) - 1) * comentariosPorPagina;
    const responseItem = await CommentModel.find({ idPublicationComment:idPublication }).skip(salto).limit(comentariosPorPagina).exec();// Saltar los comentarios ya vistos// Limitar la cantidad de comentarios devueltos
    return responseItem;
};
*/
// (2) Post (creation) of a comment of a publication ...
const postOnePublication = async(item: Publication) => {
    const responseInsert = await PublicationModel.create(item);
    return responseInsert;
};


/*
// (3) Post (creation) of an answer to a comment ...
const postAnswerPublication = async(idComment:string, item: Comment) => {
    const responseInsert = await CommentModel.create(item);
    const responseItem = await CommentModel.findOne({ _id: idComment }, { $addToSet: { responseComment: responseInsert._id } },{new: true});
    return responseItem;
};

// (4) Put (edition) of a comment ...
const updateCommentPublication = async(idComment:string, item: Comment) => {
    const responseItem = await CommentModel.updateOne({_id: idComment},item,{new: true});
    return responseItem;
};

// (5) Delete comment ...
const deleteCommentPublication = async(idComment: string) => {
    const responseItem = await CommentModel.findOneAndRemove({_id: idComment});
    return responseItem;
}

// (6) Get all comments
const getAllComments = async() => {
    const responseItem = await CommentModel.find({ })
    return responseItem;
};

// (7) Get (obtain) comment ...
const getComment = async(idComment: string) => {
    const responseItem = await CommentModel.find({_id: idComment })
    return responseItem;
};
*/
export {postOnePublication};
