import { ADD_WORD_PAIR, DELETE_WORD_PAIR, EDIT_WORD_PAIR, SAVE_EDIT } from './actionTypes';

let nextId = 0;

export const addWordPair = ({ wordPair, dictionaryId, dictionary }) => ({
    type: ADD_WORD_PAIR,
    payload: {
        id: ++nextId,
        wordPair,
        dictionaryId,
        dictionary
    }
});

export const deleteWordPair = (dictionaryList, wordPair) => ({
    type: DELETE_WORD_PAIR,
    payload: {
        dictionaryList,
        wordPair
    }
});

export const editWordPair = id => ({
    type: EDIT_WORD_PAIR,
    payload: { id }
});

export const saveEdit = ({ id, wordPair, dictionaryId, dictionary }) => ({
    type: SAVE_EDIT,
    payload: {
        wordPair,
        id,
        dictionaryId,
        dictionary
    }
});
