const validateParenthesis = (validationElm) => {
const listOfOpenBracket = ['[', '{', '('];
const listOfClosedBracket = [']', '}', ')'];
const openBracketArr = [];
const strValidationElm = validationElm.split('');

const bracketMap = {
    '(':')',
    '[':']',
    '{':'}'
}

// console.log(bracketMap['('])
for (let i = 0; i< strValidationElm.length; i++) {
    // console.log(i)
    const prvOpenBracket = openBracketArr[openBracketArr.length-1];
    const currentChar = strValidationElm[i];
    // console.log(prvOpenBracket)
    if (strValidationElm.length % 2 !== 0){
        console.log("it is not validd");
        return false
    }
     else if (listOfOpenBracket.some(b => b === currentChar)) {
        openBracketArr.push(currentChar);
    }
    else if(bracketMap[prvOpenBracket] === currentChar){
        openBracketArr.pop();
    }
    // if (currentChar=='{' || currentChar== '['|| currentChar== '(') {
    //     openBracketArr.push(currentChar);
    //     // console.log(openBracketArr);
    //     // console.log(prvOpenBracket);
    // }

    // else if ((currentChar=='}' && prvOpenBracket == "{") || (currentChar== ']' && prvOpenBracket == "[")
    //  ||(currentChar== ')' && prvOpenBracket == "(")){
    //      openBracketArr.pop();
    //  }
}
if (openBracketArr.length === 0){
    console.log("it is valid");
    return true
}
else{
    console.log("it is not valid");
    return false
}
}
validateParenthesis("()}")
validateParenthesis("()")
validateParenthesis("()[]{}")
validateParenthesis("(}")
validateParenthesis("([)]")
validateParenthesis("{[]}")
validateParenthesis("[[[]")