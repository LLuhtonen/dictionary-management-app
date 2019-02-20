import { omit } from 'lodash';
import { ADD_DICTIONARY, DELETE_DICTIONARY, EDIT_DICTIONARY, SAVE_DICTIONARY_EDIT } from './actionTypes';

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
                byIds: Object.assign(state.byIds, { [id]: { dictionary: { name: name } } }),
                selectedListId: undefined
            };
        }
        default:
            return state;
    }
}
