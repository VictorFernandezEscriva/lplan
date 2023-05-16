//In charge to connect with the dB
import { ObjectId } from "mongoose";
import paginate from 'mongoose-paginate-v2';
import { Publication } from "../interfaces/publication.interface";
import PublicationModel from "../models/publication";
import UserModel from "../models/user";




// (1) Get (obtain) comments ...
const getNumPublications = async(numPage: string) => {
    const publicacionesPorPagina = 3;
    const salto = (parseInt(numPage) - 1) * publicacionesPorPagina;
    const responseItem = await PublicationModel.find().skip(salto).limit(publicacionesPorPagina).exec();// Saltar los comentarios ya vistos// Limitar la cantidad de comentarios devueltos
  
    return responseItem;
};

// (2) Get (obtain) Publication ...
const getPublication = async(idPublication: string) => {
    const responseItem = await PublicationModel.findOne({_id: idPublication })
    return responseItem;
};

// (3) Post (creation) of a comment of a publication ...
const postOnePublication = async(item: Publication) => {
    const responseInsert = await PublicationModel.create(item);
    return responseInsert;
};

// (4) Put (edition) of a publication ...
const updateOnePublication = async(idPublication:string, item: Comment) => {
    const responseItem = await PublicationModel.updateOne({_id: idPublication},item,{new: true});
    return responseItem;
};

// (5) Delete publication ...
const deleteOnePublication = async(idPublication: string) => {
    const responseItem = await PublicationModel.findOneAndRemove({_id: idPublication});
    return responseItem;
}

// (6) Get all publications
const getAllPublications = async() => {
    const responseItem = await PublicationModel.find({})
    return responseItem;
};

// (7) Put (edition) user le da like a una publication ...
const updateLikes = async(idPublication:string, idUser:string) => {
    const responseItem = await PublicationModel.findOneAndUpdate({_id: idPublication}, { $addToSet: { likesPublication: idUser } } ,{new: true});
    return responseItem;
};

// (8) Get all paginated publications
const getAllPaginatedPublications = async(numPage: string) => {
    const publicationsPorPagina = 2;
    const salto = (parseInt(numPage) - 1) * publicationsPorPagina;
    const responseItem = await PublicationModel.find({}).skip(salto).limit(publicationsPorPagina).exec();
    return responseItem;
};

// (9) Get all counted publications
const getCountPublication = async() => {

    const responseItem = (await PublicationModel.countDocuments({})).toString();
    return responseItem;
};

// (10) Get all publications from my followers
const getPublicationsFromFollowers = async (numPage: string, idUsuario: string) => {

    // Obtener los IDs de los usuarios seguidos
    const usuario = await UserModel.findById({_id:idUsuario}).exec();
    const idsUsuariosSeguidos = usuario?.followersUser
    if(!idsUsuariosSeguidos || idsUsuariosSeguidos.length ===0){
      return [];
    }

    const PUBLICACIONES_POR_PAGINA = 3;
    // Obtener las publicaciones de los usuarios seguidos
    const salto = (parseInt(numPage) - 1) * PUBLICACIONES_POR_PAGINA;
    const publicaciones = await PublicationModel.find({ idUserPublication: { $in: idsUsuariosSeguidos } }).sort({ createdAt: -1 }).skip(salto).limit(PUBLICACIONES_POR_PAGINA).exec();
  
    return publicaciones;
  };

export {getNumPublications,getCountPublication, postOnePublication, getAllPublications, getPublication, updateOnePublication, deleteOnePublication, updateLikes, getAllPaginatedPublications, getPublicationsFromFollowers};
