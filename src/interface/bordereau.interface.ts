import { Document } from 'mongoose'

export interface Bordereau extends Document {
    id?: string;    
    bordereau: string;
    numBordereau: string,
    dateVersement: Date,
    montant: number
}