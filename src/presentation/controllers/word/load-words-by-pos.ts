import { Word } from './../../../domain/model/word';
import word from '../../../main/docs/word-schema';
import { ILoadWordsByPos } from "../../../domain/usecases/word/i-load-words-by-pos";
import { Request, Response } from 'express';

class LoadWordsByPos implements ILoadWordsByPos {
    constructor() {}

    async load(req: Request, res: Response): Promise<Response<Array<Word>>> {
        const { pos } = req.query;
        const words = await word.find({ pos: { $regex: pos, $options: 'i' } }).limit(100);

        return res.json(words);
    }
}

// export type pos = 'n.' | 'a.' | 'v.' | 'adv.' | 'interj.';
export default new LoadWordsByPos();