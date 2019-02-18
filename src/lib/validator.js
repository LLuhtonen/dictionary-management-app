export const validateInput = (dictionaryList, wordPair) => {
    const domain = wordPair.domain.trim().toLowerCase();
    const range = wordPair.range.trim().toLowerCase();

    let domainErrors = {
        domainError: false,
        error: undefined
    };

    let rangeErrors = {
        rangeError: false,
        error: undefined
    };

    domainErrors = checkIfInputIsEmpty(domain, 'domain');
    rangeErrors = checkIfInputIsEmpty(range, 'range');

    if (domain === range && domain !== '') {
        return {
            domainErrors: {
                domainError: true,
                error: 'Domain and Range must not match'
            },
            rangeErrors: {
                rangeError: true,
                error: 'Domain and Range must not match'
            }
        }
    }



    dictionaryList.map((item) => {
        if (item.wordPair.domain.toLowerCase() === domain) {
            domainErrors = {
                domainError: true,
                error: 'A domain with this input value exits!'
            }
        } else if (item.wordPair.range.toLowerCase() === domain) {
            domainErrors = {
                domainError: true,
                error: 'Severe Error! Range contains this Domain! ' +
                    'Adding this value would make this dictionary unprocessable.'
            }
        }
        if (item.wordPair.domain.toLowerCase() === range) {
            rangeErrors = {
                rangeError: true,
                error: 'Severe Error! Domain contains this Range! ' +
                    'Adding this value would make this dictionary unprocessable.'
            }
        }
    });

    return {
        domainErrors: domainErrors,
        rangeErrors: rangeErrors,
    }
};

const checkIfInputIsEmpty = (string, type) => {
    if (string === '') {
        switch (type.toLowerCase()) {
            case 'domain': {
                return {
                    domainError: true,
                    error: 'Domain must not be empty'
                }
            }
            case 'range': {
                return {
                    rangeError: true,
                    error: 'Range must not be empty'
                }
            }
            default: return false;
        }
    } else {
        switch (type.toLowerCase()) {
            case 'domain': {
                return {
                    domainError: false,
                    error: undefined
                }
            }
            case 'range': {
                return {
                    rangeError: false,
                    error: undefined
                }
            }
            default: return false;
        }
    }
};
