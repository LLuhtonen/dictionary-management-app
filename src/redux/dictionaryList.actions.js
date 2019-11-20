import {
    ADD_DICTIONARY,
    DELETE_DICTIONARY,
    EDIT_DICTIONARY,
    SAVE_DICTIONARY_EDIT,
    LINK_DICTIONARIES,
    SET_SUGGESTED_TO
} from './actionTypes';

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

export const linkDictionaries = (primaryId, linkToId) => ({
    type: LINK_DICTIONARIES,
    payload: {
        primaryId,
        linkToId
    }
});

export const setSuggestedTo = (primaryId, suggestedTo) => ({
    type: SET_SUGGESTED_TO,
    payload: {
        primaryId,
        suggestedTo
    }
});
