import {Document} from "mongoose";

export interface SearchWordsRepository {
  search: (name: string) => Promise<Array<Document> | undefined>;
}
