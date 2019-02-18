export const getDictionaryListState = store => store.dictionaryReducer;

export const getDictionaryList = store =>
    getDictionaryListState(store) ? getDictionaryListState(store).dictionaryIds : [];

export const getDictionaryItemById = (store, id) =>
    getDictionaryListState(store) ? { ...getDictionaryListState(store).byIds[id], id } : {};

export const getDictionaryItems = store =>
    getDictionaryList(store).map(id => getDictionaryItemById(store, id));

export const getBySelectedId = store =>
    getDictionaryListState(store).selectedPairId ? getDictionaryItemById(store, getDictionaryListState(store).selectedPairId) : {};
