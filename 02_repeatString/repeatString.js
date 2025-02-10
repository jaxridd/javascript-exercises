const repeatString = function(string, num) {
    let repeated = '';
    if(num < 0) {
        return "ERROR";
    } else {
        for(num; num > 0; num--) {
            repeated = repeated.concat(string);
        }
    }
    
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
