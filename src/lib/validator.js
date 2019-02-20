export const validateInput = (dictionaryList, wordPair) => {
    const domain = wordPair.domain.trim().toLowerCase();
    const range = wordPair.range.trim().toLowerCase();
    const id = wordPair.id;

    dictionaryList.filter(item => item.id !== id).map((item) => {
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

export const validateDelete = (dictionaryList, wordPair) => {
    Object.values(dictionaryList).map((item) => {
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
