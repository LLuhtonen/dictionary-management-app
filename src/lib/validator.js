export const validateInput = (dictionary, wordPair, dictionaryId, isEditing) => {
    const domain = wordPair.domain.trim().toLowerCase();
    const range = wordPair.range.trim().toLowerCase();
    const id = wordPair.id;
    let foundErrors = false;

    const dictionaryFiltered = dictionary.filter(item => Number(item.dictionaryId === dictionaryId));

    if(!!dictionaryFiltered && dictionaryFiltered.length > 0) {
        dictionaryFiltered.filter(item => item.id !== id).forEach((item) => {
            if (domain === item.wordPair.domain.toLowerCase()) {
                if (range === item.wordPair.range.toLowerCase()) {
                    item.wordPair.errors = pushError(item.wordPair.errors, { type: 'dup', id: wordPair.id }, isEditing);
                    wordPair.errors = pushError(wordPair.errors, { type: 'dup', id: item.id });
                    foundErrors = true;
                } else {
                    item.wordPair.errors = pushError(item.wordPair.errors, { type: 'fork', id: wordPair.id }, isEditing);
                    wordPair.errors = pushError(wordPair.errors, { type: 'fork', id: item.id });
                    foundErrors = true;
                }
            } else if (domain === item.wordPair.range.toLowerCase()) {
                if (range === item.wordPair.domain.toLowerCase()) {
                    item.wordPair.errors = pushError(item.wordPair.errors, { type: 'cycle', id: wordPair.id }, isEditing);
                    wordPair.errors = pushError(wordPair.errors, { type: 'cycle', id: item.id });
                    foundErrors = true;
                } else {
                    item.wordPair.errors = pushError(item.wordPair.errors, { type: 'chain', id: wordPair.id }, isEditing);
                    wordPair.errors = pushError(wordPair.errors, { type: 'chain', id: item.id });
                    foundErrors = true;
                }
            }
            if (isEditing && !foundErrors) {
                item.wordPair.errors =  removeError(item.wordPair.errors, wordPair.id);
                wordPair.errors = removeError(wordPair.errors, item.id);
            }
        });
    }

    return wordPair.errors;
};

export const validateDelete = (dictionary, wordPair, id) => {
    dictionary.filter(item => item.id !== id).forEach((item) => {
        if (wordPair.domain.toLowerCase() === item.wordPair.domain) {
            item.wordPair.errors = removeError(item.wordPair.errors, id);
        } else if (wordPair.range.toLowerCase() === item.wordPair.domain) {
            item.wordPair.errors = removeError(item.wordPair.errors, id);
        } else if (wordPair.domain.toLowerCase() === item.wordPair.range) {
            item.wordPair.errors = removeError(item.wordPair.errors, id);
        }
    });
};

export const checkIfDictionaryExists = (dictionaryList, name, id) => {
    let exists = false;

    dictionaryList.forEach(dictionary => {
        if (dictionary.dictionary.name.toLowerCase() === name.toLowerCase() && dictionary.id !== id) {
            exists = true
        }
    });

    return exists
};

const pushError = (errorList, error, isEditing) => {
    if (isEditing) {
        errorList = removeError(errorList, error.id)
    }
    return errorList ? [...errorList, error] : [error];
};

const removeError = (errorList, id) => {
    return errorList ? errorList.filter(item => item.id !== id) : undefined;
};
