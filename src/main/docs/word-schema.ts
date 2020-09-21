import mongoose from "mongoose";

export const words = new mongoose.Schema({
    word: String,
    pos: String,
    synonyms: String,
    definitions: [String]
},
{ collection: 'words' });

export default mongoose.model('Word', words);