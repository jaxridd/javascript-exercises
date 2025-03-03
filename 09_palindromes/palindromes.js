const palindromes = function (str) {
    splited = str.split("")
    splited.reverse()
    reversedStr = splited.join("");
    return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
