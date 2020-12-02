
import { Document }  from 'mongoose'


export interface Admin extends Document  {
        nom?: String,
        prenom?: String,
        tel?: String,
        email?: String,
        image?: String,
        sexe?: String,
}
