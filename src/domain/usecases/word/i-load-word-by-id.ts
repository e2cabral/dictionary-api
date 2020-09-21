import { Word } from './../../model/word';
import { Request, Response } from "express";

export interface ILoadWordById {
    load: (req: Request, res: Response) => Promise<Response<Word>>;
}