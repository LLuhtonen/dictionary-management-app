import { omit } from 'lodash';
import { ADD_WORD_PAIR, DELETE_WORD_PAIR, EDIT_WORD_PAIR, SAVE_EDIT } from './actionTypes';
import {validateDelete, validateInput} from '../lib/validator';

const initialState = {
    dictionaryIds: [],
    selectedPairId: undefined,
    byIds: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_WORD_PAIR: {
            const { wordPair, id, dictionaryId, dictionary } = action.payload;
            const errors = validateInput(dictionary, { ...wordPair, id: id }, dictionaryId);
            return {
                ...state,
                dictionaryIds: [...state.dictionaryIds, id],
                selectedPairId: undefined,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        wordPair: { ...wordPair, errors: errors },
                        dictionaryId
                    }
                }
            };
        }
        case DELETE_WORD_PAIR: {
            const { dictionaryList, wordPair } = action.payload;
            validateDelete(dictionaryList, wordPair.wordPair, wordPair.id);
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
            const { wordPair, id, dictionaryId, dictionary } = action.payload;
            const errors = validateInput(dictionary, { ...wordPair, id: id }, dictionaryId, true);
            return {
                ...state,
                byIds: Object.assign(state.byIds, { [id]: { wordPair: { ...wordPair, errors: errors }, dictionaryId } }),
                selectedPairId: undefined
            };
        }
        default:
            return state;
    }
}
