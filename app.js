const validateParenthesis = (validationElm) => {
    const openBracketArr = [];
    const strValidationElm = validationElm.split('');

    const bracketMap = {
        '(':')',
        '[':']',
        '{':'}'
    }
    if (strValidationElm.length % 2 !== 0){
        console.log("it is not validd");
        return false
    }

    strValidationElm.forEach(strElm => {
        // console.log(strElm)
        const currentChar = strElm;
        const listOfOpenBracket = Object.keys(bracketMap);
        const prvOpenBracket = openBracketArr[openBracketArr.length-1];
        if (listOfOpenBracket.some(b => b === currentChar)) {
            openBracketArr.push(currentChar);
        }
        else if(bracketMap[prvOpenBracket] == currentChar){
            openBracketArr.pop();
        }
        // else{
        //     console.log("it is not valid")
        // }
    })
        if (openBracketArr.length === 0){
            console.log("it is valid");
            return true
        }
        else{
            console.log("it is not valid");
            return false
        }
}
validateParenthesis("()}");
validateParenthesis("()");
validateParenthesis("()[]{}");
validateParenthesis("(}");
validateParenthesis("([)]");
validateParenthesis("{[]}");
validateParenthesis("[[[]");