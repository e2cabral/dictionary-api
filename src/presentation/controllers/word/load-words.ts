import { Request, Response } from "express";

import word from "../../../main/docs/word-schema";

import { ILoadWords } from '../../../domain/usecases/word/i-load-words';
import { Word } from '../../../domain/model/word';

class LoadWords implements ILoadWords {
    constructor() {}

    async load(req: Request, res: Response): Promise<Response<Array<Word>>> {
        const total = await word.countDocuments();
        const words = await word.find().skip((Math.random() * total) / 100).limit(100);
        return res.json(words);
    }
}

export default new LoadWords();