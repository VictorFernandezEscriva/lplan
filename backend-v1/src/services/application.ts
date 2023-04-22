import { Application } from "../interfaces/application.interface";
import ApplicationModel from "../models/application";


// (1) Post (creation) of an Application  ...
const postApplication = async(item: Application) => {
    const responseInsert = await ApplicationModel.create(item);
    return responseInsert;
};

// (2) Put (edition) of an Application  ...
const updateApplication  = async(idApplication:string, item: Application) => {
    const responseItem = await ApplicationModel.updateOne({_id: idApplication},item,{new: true});
    return responseItem;
};

// (3) Delete an Application  ...
const deleteApplication  = async(idApplication: string) => {
    const responseItem = await ApplicationModel.findOneAndRemove({_id: idApplication});
    return responseItem;
}

// (4) Get all Application  ...
const getAllApplication  = async() => {
    const responseItem = await ApplicationModel.find({ })
    return responseItem;
};

// (5) Get (obtain) a particular Application  ...
const getParticularApplication  = async(idApplication: string) => {
    const responseItem = await ApplicationModel.findOne({_id: idApplication })
    return responseItem;
};

export {postApplication, updateApplication, deleteApplication, getAllApplication, getParticularApplication};