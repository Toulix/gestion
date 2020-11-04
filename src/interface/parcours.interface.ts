import { Document } from 'mongoose';

export interface Parcours extends Document {
    id?: string;
    abbreviation : string;
    description : string;
}