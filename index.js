const validateCred = (array) => {
    const newArray = [];
    for (let i = array.length - 2; i >= 0; i -= 2) {
        let multiplyByTwo = array[i] * 2;
        if (multiplyByTwo > 9) {
            multiplyByTwo -= 9;
        }
        newArray.push(multiplyByTwo);
    }
    for (let j = array.length - 1; j >= 0; j -= 2) {
        let test2 = array[j];
        newArray.push(test2);
    }

    const summedNums = newArray.reduce((valorAnterior, valorAtual) => {
        return valorAnterior + valorAtual;
    });

    if (summedNums % 10 === 0) {
        return true;
    } else if (summedNums % 10 !== 0) {
        return false;
    }
};
const findInvalidCards = (nestedArray) => {
    const invalidArray = [];
    for (let i = 0; i < nestedArray.length; i++) {
        const checking = validateCred(nestedArray[i]);
        if (checking === false) {
            invalidArray.push(nestedArray[i]);
        }
    }
    return invalidArray;
};
const idInvalidCardCompanies = (invalidArray) => {
    let companyArray = [];
    for (let i = 0; i < invalidArray.length; i++) {
        const index = invalidArray[i][0];
        if (index === 3) {
            companyArray.push('Amex');
        } else if (index === 4) {
            companyArray.push('Visa');
        } else if (index === 5) {
            companyArray.push('Mastercard');
        } else if (index === 6) {
            companyArray.push('Discover');
        } else if (index !== 3 || index !== 4 || index !== 5 || index !== 6) {
            companyArray.push('Company not found');
        }
    }
    const filtered = companyArray.filter((item, index) => {
        if (companyArray.indexOf(item) === index) {
            return item;
        }
    });
    return filtered;
};
