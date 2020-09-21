export class Word {
    constructor(word: string, pos: string, synonyms: string, definitions: Array<string>) {
        this.word = word;
        this.pos = pos;
        this.synonyms = synonyms;
        this.definitions = definitions;
    }

    word: string;
    pos: string;
    synonyms: string;
    definitions: Array<string>;
}