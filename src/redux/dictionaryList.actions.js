import { ADD_DICTIONARY, DELETE_DICTIONARY, EDIT_DICTIONARY, SAVE_DICTIONARY_EDIT } from './actionTypes';

let nextId = 0;

export const addDictionary = dictionary => ({
    type: ADD_DICTIONARY,
    payload: {
        id: ++nextId,
        dictionary
    }
});

export const deleteDictionary = id => ({
    type: DELETE_DICTIONARY,
    payload: { id }
});

export const editDictionary = id => ({
    type: EDIT_DICTIONARY,
    payload: { id }
});

export const saveDictionaryEdit = ({ id, name }) => ({
    type: SAVE_DICTIONARY_EDIT,
    payload: {
        id,
        name
    }
});
