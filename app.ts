// 'unknown' type

let userInput: unknown;
let userName: string

userInput = 5
userInput = "Max"

// userName = userInput
// This fails because it is initialized as an 
// 'unknown' type and cannot be assigned to any
// other type. That's it main difference with the
// 'any' type which disables any form of type checking. 

if (typeof userInput == "string"){
    userName = userInput;
}


// 'never' type

function throwError(): never{
    throw new Error("Testing the 'never' type");
}