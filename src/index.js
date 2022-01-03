module.exports = function toReadable(number) {
    const unitsArr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const arrAfterTen = [
        "null",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozensArr = [
        "null",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const numStr = number.toString();
    const numLeng = numStr.length;

    if (number < 10) {
        return unitsArr[number];
    }

    if (numLeng === 2) {
        if (10 < number && number < 20) {
            return arrAfterTen[numStr[1]];
        } else if (9 < number && number < 91 && numStr[1] === "0") {
            return dozensArr[numStr[0]];
        }
        return `${dozensArr[numStr[0]]} ${unitsArr[numStr[1]]}`;
    } else if (numLeng === 3) {
        if (numStr[1] === "0" && numStr[2] === "0") {
            return `${unitsArr[numStr[0]]} hundred`;
        } else if (numStr[1] === "0") {
            return `${unitsArr[numStr[0]]} hundred ${unitsArr[numStr[2]]}`;
        } else if (numStr[2] === "0") {
            return `${unitsArr[numStr[0]]} hundred ${dozensArr[numStr[1]]}`;
        } else if (numStr[1] === "1" && Number(numStr[2]) > 0) {
            return `${unitsArr[numStr[0]]} hundred ${arrAfterTen[numStr[2]]}`;
        }
        return `${unitsArr[numStr[0]]} hundred ${dozensArr[numStr[1]]} ${
            unitsArr[numStr[2]]
        }`;
    }
};
