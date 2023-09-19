const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

console.log("Euro to dollar: ", fromEuroToDollar(1));


const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar*(127.9/1.2);
    return valueInYen;
}

console.log("Dollar to yen: ", fromDollarToYen(1));


const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen*(0.8/127.9);
    return valueInPound;
}

console.log("Yen to pound :", fromYenToPound(1));

const sum = (num1, num2) => {
    return num1 + num2
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }