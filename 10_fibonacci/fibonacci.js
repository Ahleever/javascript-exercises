const fibonacci = function(number) {
    number = parseInt(number)
    let start = 1;
    let result = 1;
    let total = 0;
    while(number > 1){
        for (let i = 1; i < number; i++){
            total = start + result;
            start = result;
            result = total;
        }
        return start
    }
    if(number < 0){
        return "OOPS"
    }
    return number
};

// Do not edit below this line
module.exports = fibonacci;
