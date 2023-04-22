/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { postApplicationController, updateApplicationController, deleteApplicationController, getAllApplicationsController, getParticularApplicationController } from "../controllers/application";

const router = Router(); 

// (1) Post (creation) of an Application ...
router.post("/createApplication",postApplicationController);

// (2) Put (edition) of an Application ...
router.put("/updateApplication/:idApplication",updateApplicationController);

// (3) Delete an Application ...
router.delete("/deleteApplication/:idApplication", deleteApplicationController);

// (4) Get all Application ...
router.get("/getAllApplications", getAllApplicationsController);

// (5) Get (obtain) a particular Application ...
router.get("/getApplication/:idApplication", getParticularApplicationController);

export {router};
