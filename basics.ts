function add(num1: number, num2: number, showResult: boolean){
    if(showResult){
        console.log(num1 + num2)
    }else{
        return num1 + num2 
    }
}


const firstNumber = 5;
const secondNumber = 6;


add(firstNumber, secondNumber, true)


// Specifying types on declaration

let number3: number;
let number4: number;

var string1: string;
var string2: string;

number3 = 5 
number4 = 6

// Doesn't work for the 'const' keyword