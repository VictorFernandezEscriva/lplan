import { Request,Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { postApplication, updateApplication, deleteApplication, getAllApplication, getParticularApplication, getAllPaginatedApplications } from "../services/application";

// (1) Post (creation) of an Application ...
const postApplicationController=async ({body}:Request,res:Response)=>{
    try{
        const response=await postApplication(body);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    }catch(e){
        handleHttp(res,"ERROR_POST_APPLICATION");
    }
};

// (2) Put (edition) of an Application ...
const updateApplicationController=async ({params,body}:Request,res:Response)=>{
    try{
        const {idApplication}=params;
        const response=await updateApplication(idApplication,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_APPLICATION");
    }
};

// (3) Delete an Application ...
const deleteApplicationController=async ({params}:Request,res:Response)=>{
    try{
        const {idApplication}=params;
        const response=await deleteApplication(idApplication);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_APPLICATION");
    }
};

// (4) Get all Application ...
const getAllApplicationsController=async(req:Request,res:Response)=>{
    try{
        const response=await getAllApplication(); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_ALL_APPLICATION");
    }
};

// (5) Get (obtain) a particular Application ...
const getParticularApplicationController=async({params}:Request,res:Response)=>{
    try{
        const {idApplication}=params;
        const response=await getParticularApplication(idApplication); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_THAT_APPLICATION");
    }
};

// (6) Get all paginated applications
const getAllPaginatedApplicationsController=async({params}:Request,res:Response)=>{
    try{
        const {numPage}=params;
        const response=await getAllPaginatedApplications(numPage); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_ALL_PAGINATED_APPLICATION");
    }
};

export{postApplicationController, updateApplicationController, deleteApplicationController, getAllApplicationsController, getParticularApplicationController, getAllPaginatedApplicationsController};