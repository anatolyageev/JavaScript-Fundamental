//Task1

function DNA_strand(str) {
    let result = "";
    for (let char of str) {
        result += deMux(char);
    }
    return result;
}

function deMux(char) {
    switch (char) {
        case 'A':
            return 'T';
            break;
        case 'T':
            return 'A';
            break;
        case 'C':
            return 'G';
            break;
        case 'G':
            return 'C';
            break;
        default:
            break;
    }
}

console.log(DNA_strand("ATTGC"));
console.log(DNA_strand("GTAT"));

//Task2 



//Task4
function reduceAsMap(arr) {
    return arr.reduce((result, el) => {
        result.push(el[0]);
        return result;
    }, []);
}

console.log(reduceAsMap(['Яблоко', 'Банан', 'Ананас']));

function reduceAsFilter(arr) {
    return arr.reduce((result, el) => {
        if (el == 'Ананас') {
            result.push(el);
        }
        return result;
    }, []);
}

console.log(reduceAsFilter(['Яблоко', 'Банан', 'Ананас']));

function reduceAsForEach(arr) {
    return arr.reduce((result, el, index) => {
        result.push(`${index + 1}: ${el};`);
        return result;
    }, []);
}

console.log(reduceAsForEach(['Яблоко', 'Банан', 'Ананас']));