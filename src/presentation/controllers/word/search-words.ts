import { Request, Response } from 'express';
import { Word } from '../../../domain/model/word';
import { ISearchWords } from '../../../domain/usecases/word/i-search-words';
import {WordRepository} from "../../../infra/db/mongodb/word/word-repository";

class SearchWords implements ISearchWords {
    constructor(private readonly wordRepository: WordRepository) {}

    async search(req: Request, res: Response): Promise<Response<Array<Word>>> {
        let { name } = req.query;
        const words = await this.wordRepository.search(`${name}`);

        return res.json(words);
    }
}

export default new SearchWords(new WordRepository());
