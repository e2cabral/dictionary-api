import {Pos} from "../../../domain/model/pos";
import {Document} from "mongoose";

export interface LoadWordsByPosRepository {
  loadByPos: (pos: Pos) => Promise<Array<Document> | undefined>;
}
