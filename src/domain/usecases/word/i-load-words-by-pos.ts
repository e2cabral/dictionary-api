import { Word } from './../../model/word';
import { Request, Response } from "express";

export interface ILoadWordsByPos {
    load: (req: Request, res: Response) => Promise<Response<Array<Word>>>;
}