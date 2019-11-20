export const getDictionaryState = store => store.dictionaryReducer;

export const getDictionary = store =>
    getDictionaryState(store) ? getDictionaryState(store).dictionaryIds : [];

export const getDictionaryItemById = (store, id) =>
    getDictionaryState(store) ? { ...getDictionaryState(store).byIds[id], id } : {};

export const getDictionaryItems = store =>
    getDictionary(store).map(id => getDictionaryItemById(store, id));

export const getBySelectedId = store =>
    getDictionaryState(store).selectedPairId ? getDictionaryItemById(store, getDictionaryState(store).selectedPairId) : {};

export const getDictionaryListState = store => store.dictionaryListReducer;

export const getDictionaryList = store =>
    getDictionaryListState(store) ? getDictionaryListState(store).dictionaryIds : [];

export const getDictionaryListItemById = (store, id) =>
    getDictionaryListState(store) ? { ...getDictionaryListState(store).byIds[id], id } : {};

export const getDictionaryListItems = store =>
    getDictionaryList(store).map(id => getDictionaryListItemById(store, id));

export const getDictionaryListByIds = store =>
    getDictionaryListState(store).selectedListId ? getDictionaryListItemById(store, getDictionaryListState(store).selectedListId) : {};

export const getDictionaryItemsByDictionaryId = (store, id) =>
    getDictionaryState(store).byIds
        ? Object.entries(getDictionaryState(store).byIds)
        .filter(([key, value]) => parseInt(value.dictionaryId) === id)
            .map(entry => entry[1])
        : [];
