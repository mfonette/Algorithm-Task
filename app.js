// const validateParenthesis = (s) => {
//     let singleParenthesis =[];
//     // let x = s[0];
//     // console.log(x)
//  strParenthesis = s.split(',');
// //  console.log(strParenthesis)
//  let x = strParenthesis;
// //  console.log(x)
// for(let i=0; i<strParenthesis.length; i++) {
//     console.log(x[i])
//     singleParenthesis.push(x[i]);
//     for (let b=1; b<strParenthesis; b++){
//         console.log(x[b])
//     if (x!==i){
//         if ((i === '(' && x === ")")){
//             console.log("its valid")
//         }
//     }
//     let parenthesis = x[i];
//     console.log (parenthesis);
//     let isValid = true;
//     for (let b=1; b<strParenthesis; b++) {
//         // if((i === '(' && b === ")")||(i === '{' && b === "}")|| (i === '[' && b === "]") ){
//         //     console.log(i);
//         //     console.log(b);
//         //     isValid;
//         // }

//     }
//     if(isValid) {
//         ans += parenthesis;
//     }
// }
// }
//     return ans;
// }



const validateParenthesis = (validationElm) => {
let openBracketArr = [];
let strValidationElm = validationElm.split('');
// console.log(strValidationElm)

for (let i = 0; i< strValidationElm.length; i++) {
    // console.log(i)
    let prvOpenBracket = []
    prvOpenBracket.push(openBracketArr[openBracketArr.length-1]);
    // console.log(prvOpenBracket)
    // if (validationElm.length % 2 !== 0){
    //     console.log("it is not valid")
    //     return false
    // }
    if (strValidationElm[i] =='{' || strValidationElm[i] == '['|| strValidationElm[i] == '(') {
        openBracketArr.push(strValidationElm[i])
        // console.log(openBracketArr)
        // console.log(prvOpenBracket)
    }
    // else if ( (strValidationElm[i] =='}' || strValidationElm[i] == ']'|| strValidationElm[i] == ')')){
    //     if((openBracketArr[openBracketArr.length-1] == "{" || openBracketArr[openBracketArr.length-1] == "[" || openBracketArr[openBracketArr.length-1] == "(")){
    //         console.log("found a pair")
    //     }
    // }
    else if ((strValidationElm[i] =='}' && openBracketArr[openBracketArr.length-1] == "{") || (strValidationElm[i] == ']' && openBracketArr[openBracketArr.length-1] == "[")
     ||(strValidationElm[i] == ')' && openBracketArr[openBracketArr.length-1] == "(")){
         console.log("pair found")
     }
    // else if ((prvOpenBracket == "[" && strValidationElm[i] == "]") ||(prvOpenBracket == "{" && strValidationElm[i] == "}")||(prvOpenBracket == "(" && strValidationElm[i] == ")")) {
    //     console.log(prvOpenBracket)
    //     // prvOpenBracket.pop();
    // }
    // else{
    //     return false;
    // }
}
// if (openBracketArr.length == [] ){
//     console.log("it is valid")
//     return true
// }
// else{
//     console.log("it is not valid")
//     return false
// }
}

validateParenthesis("()")
// validateParenthesis("()[]{}")
// validateParenthesis("(}")
// validateParenthesis("([)]")
// validateParenthesis("{[]}")
// validateParenthesis("{,},[,],(,)")