import { Request, Response } from "express";
import { ILoadWords } from '../../../domain/usecases/word/i-load-words';
import { Word } from '../../../domain/model/word';
import {WordRepository} from "../../../infra/db/mongodb/word/word-repository";

class LoadWords implements ILoadWords {
    constructor(private readonly wordRepository: WordRepository) {}

    async load(req: Request, res: Response): Promise<Response<Array<Word>>> {
        try {
            const words = await this.wordRepository.loadAll();
            return res.json(words);
        } catch (e) {
            return res.send(e.message);
        }
    }
}

export default new LoadWords(new WordRepository());
