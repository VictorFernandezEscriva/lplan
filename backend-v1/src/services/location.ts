import { Location } from "../interfaces/location.interface";
import LocationModel from "../models/location";

const insertLocation = async(item: Location) => {
    const responseInsert = await LocationModel.create(item);
    return responseInsert;
};

const getAllLocations = async() => {
    const responseItem = await LocationModel.find({});
    return responseItem;
};

const getLocations = async( numPage: string) => {
    const localizacionesPorPagina = 3;
    const salto = (parseInt(numPage,10) - 1) * localizacionesPorPagina;
    const responseItem = await LocationModel.find().skip(salto).limit(localizacionesPorPagina).exec();//Saltar las localizaciones ya vistas, presentar las de su pagina correspondiente

    return responseItem;
};


const getLocation = async(id: string) => {
    const responseItem = await LocationModel.findOne({_id: id});
    return responseItem;
};

const updateLocation = async(id: string, data: Location) => {
    const responseItem = await LocationModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const deleteLocation = async(id: string) => {
    const responseItem = await LocationModel.findOneAndRemove({_id: id});
    return responseItem;
}


export {insertLocation, getLocation, getLocations, updateLocation, deleteLocation,getAllLocations};
