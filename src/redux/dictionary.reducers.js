import { omit } from 'lodash';
import { ADD_WORD_PAIR, DELETE_WORD_PAIR, EDIT_WORD_PAIR, SAVE_EDIT } from './actionTypes';
import { validateDelete } from '../lib/validator';

const initialState = {
    dictionaryIds: [],
    selectedPairId: undefined,
    byIds: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_WORD_PAIR: {
            const { wordPair, id } = action.payload;
            return {
                ...state,
                dictionaryIds: [...state.dictionaryIds, id],
                selectedPairId: undefined,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        wordPair,
                    }
                }
            };
        }
        case DELETE_WORD_PAIR: {
            const { wordPair } = action.payload;
            validateDelete(state.byIds, wordPair.wordPair);
            return {
                ...state,
                dictionaryIds: [...state.dictionaryIds.filter((_id) => _id !== wordPair.id)],
                byIds: omit(state.byIds, [wordPair.id])

            };
        }
        case EDIT_WORD_PAIR: {
            const { id } = action.payload;
            return {
                ...state,
                selectedPairId: id
            };
        }
        case SAVE_EDIT: {
            const { wordPair, id } = action.payload;
            return {
                ...state,
                byIds: Object.assign(state.byIds, { [id]: { wordPair } }),
                selectedPairId: undefined
            };
        }
        default:
            return state;
    }
}
