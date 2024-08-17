const removeFromArray = function(array, ...remove) {
    let cleaned = [];
    for(const item of array){
        if(!remove.includes(item) ){
            cleaned.push(item);
        }
    }
    return cleaned;
};

// Do not edit below this line
module.exports = removeFromArray;
