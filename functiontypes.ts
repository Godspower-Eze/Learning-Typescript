function solve(num1: number, num2: number){
    return num1 + num2 
}

let combinedValues: (a: number, b: number) => number;

combinedValues = solve

console.log(combinedValues(1,3))

const addAndHandle = (num1: number, num2: number, cb: (a: number) => void) => {
    let result = num1 + num2
    cb(result)
}

addAndHandle(2, 4, (result) => {
    console.log(result)
})