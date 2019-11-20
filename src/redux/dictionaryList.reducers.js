import { omit } from 'lodash';
import { ADD_DICTIONARY, DELETE_DICTIONARY, EDIT_DICTIONARY, SAVE_DICTIONARY_EDIT, LINK_DICTIONARIES, SET_SUGGESTED_TO } from './actionTypes';

const initialState = {
    dictionaryIds: [],
    selectedListId: undefined,
    byIds: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_DICTIONARY: {
            const { dictionary, id } = action.payload;
            return {
                ...state,
                dictionaryIds: [...state.dictionaryIds, id],
                selectedListId: undefined,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        dictionary,
                        linkedTo: [],
                        suggestedTo: null,
                    }
                }
            };
        }
        case DELETE_DICTIONARY: {
            const { id } = action.payload;
            return {
                ...state,
                dictionaryIds: [...state.dictionaryIds.filter((_id) => _id !== id)],
                byIds: omit(state.byIds, [id])

            };
        }
        case EDIT_DICTIONARY: {
            const { id } = action.payload;
            return {
                ...state,
                selectedListId: id
            };
        }
        case SAVE_DICTIONARY_EDIT: {
            const { id, name } = action.payload;
            return {
                ...state,
                byIds: Object.assign(state.byIds, { [id]: { ...state.byIds[id], dictionary: { name: name } } }),
                selectedListId: undefined
            };
        }
        case LINK_DICTIONARIES: {
            const { primaryId, linkToId } = action.payload;
            if (Number.isNaN(linkToId) || state.byIds[primaryId].linkedTo.includes(linkToId)) {
                return state;
            }
            return {
                ...state,
                byIds: Object.assign(state.byIds, { [primaryId]: { ...state.byIds[primaryId], linkedTo: [...state.byIds[primaryId].linkedTo, linkToId] } }),
                selectedListId: undefined
            };
        }
        case SET_SUGGESTED_TO: {
            const { primaryId, suggestedTo } = action.payload;

            if (Number.isNaN(suggestedTo)) {
                return {
                    ...state,
                    byIds: Object.assign(state.byIds, { [primaryId]: { ...state.byIds[primaryId], suggestedTo: null } }),
                    selectedListId: undefined
                };
            }

            return {
                ...state,
                byIds: Object.assign(state.byIds, { [primaryId]: { ...state.byIds[primaryId], suggestedTo } }),
                selectedListId: undefined
            };
        }
        default:
            return state;
    }
}
