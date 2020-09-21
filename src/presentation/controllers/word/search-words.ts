import { Request, Response } from 'express';
import { Word } from './../../../domain/model/word';
import word from '../../../main/docs/word-schema';
import { ISearchWords } from './../../../domain/usecases/word/i-search-words';

class SearchWords implements ISearchWords {
    constructor() {}

    async search(req: Request, res: Response): Promise<Response<Array<Word>>> {
        const { name } = req.query;
        const words = await word.find({ word: { $regex: name, $options: 'i' } }).limit(100);

        return res.json(words);
    }
}

export default new SearchWords();