import { Word } from './../../model/word';
import { Request, Response } from "express";

export interface ISearchWords {
    search: (req: Request, res: Response) => Promise<Response<Array<Word>>>;
}