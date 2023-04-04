import { ObjectId } from "mongoose";

export interface Activity {
    nameActivity: string;
    creatorActivity: ObjectId;
    participantsActivity?: ObjectId[];
    photoActivity?: ImageBitmap[]; //Vector con todas las fotos que los usuarios hayan hecho en esa actividad.
    dateActivity: string;
    hoursActivity: string[]; //Hora de inicio y hora de final. ***Intentar poner que tenga longitud 2***
    idLocation?: ObjectId; //Localización opcional para quien quiera ponerla 
    descriptionActivity: string;
    privacyActivity: boolean; //Si queremos que nuestros seguidores puedan ver toda la info de esta actividad.
    roleActivity: "verificado" | "common" | "empresa" ;  // Verificado --> Hacer eventos publicos que aparezcan en el mapa
                                            // Common --> Hacer eventos a los que tus seguidores pueden apuntarse, pensado para usuario normales.
}