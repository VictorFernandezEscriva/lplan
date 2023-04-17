import { Request, Response, Router } from "express";
import { logMiddleware } from "../middleware/log";
import { postPublication } from "../controllers/publication";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

// http://localhost:3002/publication [GET]

// RUTAS PARA LOS COMENTARIOS ...
/*
// (1) Get (obtain) publications...
router.get("/getPublications/:idPublication/:numPage", getPaginatePublications);


// (2) Get (obtain) a publication...
router.get("/getPublication/:idPublication", getPublication);
*/

// (3) Post (creation) of a publication ...
router.post("/createPublication",postPublication);

/*
// (4) Post (creation) of an answer to a comment ...
router.post("/createComment/:idComment",postAnswer);

// (5) Put (edition) of a comment ...
router.put("/updateComment/:idComment",updateComment);

// (5) Delete comment ...
router.delete("/deleteComment/:idComment", deleteComment);

// (6) Get all comments
router.get("/getAllComments", getAllAvailableComments);

// (7) Get (obtain) comment ...
router.get("/getComment/:idComment", getOneComment);
*/
export {router};
