export const validateInput = (dictionary, wordPair) => {
    const domain = wordPair.domain.trim().toLowerCase();
    const range = wordPair.range.trim().toLowerCase();
    const id = wordPair.id;

    dictionary.filter(item => item.id !== id).map((item) => {
        if (item.wordPair.domain.toLowerCase() === domain) {
            if (item.wordPair.range.toLowerCase() === range) {
                item.wordPair.error = 'dup';
                wordPair.error = 'dup';
            } else {
                item.wordPair.error = 'fork';
                wordPair.error = 'fork';
            }
        } else if (item.wordPair.range.toLowerCase() === domain) {
            if (item.wordPair.domain.toLowerCase() === range) {
                item.wordPair.error = 'cycle';
                wordPair.error = 'cycle';
            } else {
                item.wordPair.error = 'chain';
                wordPair.error = 'chain';
            }
        }
    });

    return {
        error: wordPair.error
    }
};

export const validateDelete = (dictionary, wordPair) => {
    Object.values(dictionary).map((item) => {
        if (item.wordPair.domain.toLowerCase() === wordPair.domain) {
            if (item.wordPair.range.toLowerCase() === wordPair.range) {
                item.wordPair.error = undefined;
            } else {
                item.wordPair.error = undefined;
            }
        } else if (item.wordPair.range.toLowerCase() === wordPair.domain) {
            if (item.wordPair.domain.toLowerCase() === wordPair.range) {
                item.wordPair.error = undefined;
            } else {
                item.wordPair.error = undefined;
            }
        }
    });
};

export const checkIfDictionaryExists = (dictionaryList, name, id) => {
    let exists = false;

    dictionaryList.map(dictionary => {
        if (dictionary.dictionary.name.toLowerCase() === name.toLowerCase() && dictionary.id !== id) {
            exists = true
        }
    });

    return exists
};
