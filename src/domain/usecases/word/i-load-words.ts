import { Request, Response } from "express";
import { Word } from "../../model/word";

export interface ILoadWords {
    load: (req: Request, res: Response) => Promise<Response<Array<Word>>>;
}