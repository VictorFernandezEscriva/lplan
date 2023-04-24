import { Activity } from "../interfaces/activity.interface";
import ActivityModel from "../models/activity";
import paginate from 'mongoose-paginate-v2';
import UserModel from "../models/user";

// (1) Post (creation) of an activity ...
const postActivity = async(item: Activity) => {
    const responseInsert = await ActivityModel.create(item);
    return responseInsert;
};

// (2) Put (edition) of an activity ...
const updateActivity = async(idActivity:string, item: Activity) => {
    const responseItem = await ActivityModel.updateOne({_id: idActivity},item,{new: true});
    return responseItem;
};

// (3) Delete an activity ...
const deleteActivity = async(idActivity: string) => {
    const responseItem = await ActivityModel.findOneAndRemove({_id: idActivity});
    return responseItem;
}

// (4) Get all activities ...
const getAllActivities = async() => {

    const responseItem = await ActivityModel.find({ })
    return responseItem;
};

// (5) Get (obtain) a particular activity ...
const getParticularActivity = async(idActivity: string) => {
    const responseItem = await ActivityModel.findOne({_id: idActivity })
    return responseItem;
};

// (6) Get all paginated activities
const getAllPaginatedActivities = async(numPage: string) => {
    const activitiesPorPagina = 2;
    const salto = (parseInt(numPage) - 1) * activitiesPorPagina;
    const responseItem = await ActivityModel.find({ }).skip(salto).limit(activitiesPorPagina).exec();
    return responseItem;
};

// (7) Get participants of an activity
const getParticipantsOfActivity =async (idActivity:string, numPage:string) => {
    const activitiesPorPagina = 2;
    const salto = (parseInt(numPage) - 1) * activitiesPorPagina;
    const activity = await ActivityModel.findById(idActivity);
    if (!activity) {
        
        throw new Error(`Actividad con _id=${idActivity} no encontrado`);
    }
    const responseParticipantIds = activity.participantsActivity;
    if (!responseParticipantIds || responseParticipantIds.length === 0) {
        
        return [];
    }
    const responseItem = await UserModel.find({_id: { $in: responseParticipantIds }}).skip(salto).limit(activitiesPorPagina).exec();
    return responseItem;
}





export {postActivity, updateActivity, deleteActivity, getAllActivities, getParticularActivity, getAllPaginatedActivities, getParticipantsOfActivity};