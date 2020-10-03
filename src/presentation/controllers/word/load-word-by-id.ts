import { Word } from '../../../domain/model/word';
import { Request, Response } from 'express';
import { ILoadWordById } from '../../../domain/usecases/word/i-load-word-by-id';
import {WordRepository} from "../../../infra/db/mongodb/word/word-repository";

class LoadWordById implements ILoadWordById {
    constructor(private readonly wordRepository: WordRepository) {}

    async load(req: Request, res: Response): Promise<Response<Word>> {
        const { id } = req.params;
        const w = await this.wordRepository.loadById(`${id}`);
        return res.json(w);
    }
}

export default new LoadWordById(new WordRepository());
