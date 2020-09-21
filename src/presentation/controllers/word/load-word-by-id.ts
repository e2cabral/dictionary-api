import word from './../../../main/docs/word-schema';
import { Word } from './../../../domain/model/word';
import { Request, Response } from 'express';
import { ILoadWordById } from './../../../domain/usecases/word/i-load-word-by-id';

class LoadWordById implements ILoadWordById {
    constructor() {}

    async load(req: Request, res: Response): Promise<Response<Word>> {
        const { id } = req.params;
        const w = await word.findById(id);
        return res.json(w);
    }
}

export default new LoadWordById();