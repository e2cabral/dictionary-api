import { Router } from 'express';
import loadWordById from '../../presentation/controllers/word/load-word-by-id';
import loadWords from '../../presentation/controllers/word/load-words';
import loadWordsByPos from '../../presentation/controllers/word/load-words-by-pos';
import searchWords from '../../presentation/controllers/word/search-words';

export default (router: Router) => {
    router
        .get('/', loadWords.load)
        .get('/edit/:id', loadWordById.load)
        .get('/type', loadWordsByPos.load)
        .get('/word', searchWords.search);
}