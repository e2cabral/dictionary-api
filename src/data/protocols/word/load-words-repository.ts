import {Document} from "mongoose";

export interface LoadWordsRepository {
  loadAll: () => Promise<Array<Document> | undefined>;
}
