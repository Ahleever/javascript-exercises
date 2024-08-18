const palindromes = function (stringInput) {
let string = stringInput.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
let left =0;
let right = string.length -1;
while (left < right){
    if(string.charAt(left) !== string.charAt(right)){
        return false;
    }
    left++;
    right--;
    }
return true
};

// Do not edit below this line
module.exports = palindromes;
