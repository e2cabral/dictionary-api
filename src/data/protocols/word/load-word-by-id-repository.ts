import {Document} from "mongoose";

export interface LoadWordByIdRepository {
  loadById: (id: string | number) => Promise<Document | null>;
}
