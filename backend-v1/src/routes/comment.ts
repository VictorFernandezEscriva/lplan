import { Request, Response, Router } from "express";
import { deletePerson, getPerson, getPeople, postPerson, updatePerson } from "../controllers/user";
import { logMiddleware } from "../middleware/log";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

// http://localhost:3002/items [GET]

// RUTAS PARA LOS COMENTARIOS ...

// (1) Get (obtain) comments ...
router.get("/getComments/:idPublication/:numPage", getComments);

// (2) Post (creation) of a comment of a publication ...
router.post("/createComment",postComment);

// (3) Post (creation) of an answer to a comment ...
router.post("/createComment/:idComment",postAnswer);

// (4) Put (edition) of a comment ...
router.put("/updateComment/:idComment",updateComment);

// (5) Delete comment ...
router.delete("/deleteComment/:idComment", deleteComment);

export {router};
