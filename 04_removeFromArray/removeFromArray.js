const removeFromArray = function(arr, ...targetNums) {
    return arr.filter((num) => !targetNums.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
