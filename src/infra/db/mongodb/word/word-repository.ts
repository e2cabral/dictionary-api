import { injectable } from "tsyringe";

import {LoadWordsRepository} from "../../../../data/protocols/word/load-words-repository";
import {LoadWordByIdRepository} from "../../../../data/protocols/word/load-word-by-id-repository";
import {LoadWordsByPosRepository} from "../../../../data/protocols/word/load-words-by-pos-repository";
import {SearchWordsRepository} from "../../../../data/protocols/word/search-words-repository";

import {Pos} from "../../../../domain/model/pos";
import {Document} from "mongoose";

import word from "../../../../main/docs/word-schema";

@injectable()
export class WordRepository implements LoadWordsRepository, LoadWordByIdRepository, LoadWordsByPosRepository, SearchWordsRepository {

  constructor() {}

  async search(name: string): Promise<Array<Document> | undefined> {
    try {
      return await word.find({word: {$regex: `^${name}`, $options: 'i'}}).limit(100);
    } catch (e) {
      throw new Error(e);
    }
  }

  async loadAll(): Promise<Array<Document> | undefined> {
    try {
      const total = await word.countDocuments();
      return await word.find().skip((Math.random() * total) / 100).limit(100);
    } catch (e) {
      throw new Error(e);
    }
  }

  async loadById(id: string | number): Promise<Document | null> {
    try {
      return await word.findById(id);
    } catch (e) {
      throw new Error(e);
    }
  }

  async loadByPos(pos: Pos): Promise<Array<Document> | undefined> {
    try {
      return await word.find({ pos: { $regex: pos, $options: 'i' } }).limit(100);
    } catch (e) {
      throw new Error(e);
    }
  }

}
