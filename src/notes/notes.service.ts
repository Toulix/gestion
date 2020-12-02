import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from 'src/interface/note.interface';

@Injectable()
export class NotesService {
    constructor(@InjectModel('Note') private readonly noteModel: Model<Note>) {}
    async findAll() {
        return await this.noteModel.find().exec();
    }

   async createNote(note) {
        const newNote = new this.noteModel(note);
        return await newNote.save();
    }

    async updateNote(idNote, valeur) {
        return await this.noteModel.findOneAndUpdate(
            {
                _id: idNote,
            },
            {
                $set: {
                    valeur: valeur
                }
            },
            {
                new: true
            }
        );
    }
}
