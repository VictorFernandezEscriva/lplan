/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { deletePerson, getPerson, getPeople, postPerson, updatePerson, getFollowersCtrl, getFollowedCtrl,follower,followed,removeFollowedCtrl,removeFollowerCtrl,getUsersPagCtrl, getCountUsers } from "../controllers/user";
import { logMiddleware } from "../middleware/log";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", logMiddleware, getPeople);
router.get("/:idUser", getPerson);
router.post("/",postPerson);
router.put("/:idUser",updatePerson);
router.delete("/:idUser", deletePerson);
router.get("/follower/:userId/:numPage", getFollowersCtrl);
router.get("/followed/:userId/:numPage", getFollowedCtrl);
router.post('/follower', follower);
router.post('/followed', followed);
router.delete('/remfollower/:idUser/:idFollower', removeFollowedCtrl);
router.post('/remfollowed/:idUser/:idFollowed', removeFollowerCtrl);
router.get("/all/:numPage",getUsersPagCtrl);
router.get("/all/count/docs",getCountUsers);

export {router};
