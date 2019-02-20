import { ADD_WORD_PAIR, DELETE_WORD_PAIR, EDIT_WORD_PAIR, SAVE_EDIT } from './actionTypes';

let nextId = 0;

export const addWordPair = wordPair => ({
    type: ADD_WORD_PAIR,
    payload: {
        id: ++nextId,
        wordPair
    }
});

export const deleteWordPair = wordPair => ({
    type: DELETE_WORD_PAIR,
    payload: { wordPair }
});

export const editWordPair = id => ({
    type: EDIT_WORD_PAIR,
    payload: { id }
});

export const saveEdit = ({ id, wordPair }) => ({
    type: SAVE_EDIT,
    payload: {
        wordPair,
        id
    }
});
