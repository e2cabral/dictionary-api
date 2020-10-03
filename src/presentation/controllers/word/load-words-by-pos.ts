import { Word } from '../../../domain/model/word';
import { ILoadWordsByPos } from "../../../domain/usecases/word/i-load-words-by-pos";
import { Request, Response } from 'express';
import {WordRepository} from "../../../infra/db/mongodb/word/word-repository";
import {Pos} from "../../../domain/model/pos";

class LoadWordsByPos implements ILoadWordsByPos {
    constructor(private readonly wordRepository: WordRepository) {}

    async load(req: Request, res: Response): Promise<Response<Array<Word>>> {
        const { pos } = req.query;
        const words = await this.wordRepository.loadByPos(pos as Pos);

        return res.json(words);
    }
}

export default new LoadWordsByPos(new WordRepository());
