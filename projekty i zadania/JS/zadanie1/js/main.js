


function odwracanie(str) {
    var splitString = str.split("");
    
    var reverseString = splitString.reverse();
    
    var joinString = reverseString.join("");
    
    return joinString;
    
}

var text1 = odwracanie("Akademia108");

console.log(text1);

