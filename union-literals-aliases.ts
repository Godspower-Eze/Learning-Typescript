function combine(input1: number|string, input2: number|string){
    let result;
    if (typeof input1 === "number" && typeof input2 === "number"){
        result = input1 + input2
    }else{
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinedAges = combine(12, 14)
console.log(combinedAges)

const combinedNames = combine("Godspower", "Eze")
console.log(combinedNames)

// Literals

let answer: "Yes" | "No";  

// Type Aliases

type Combinable = number | string

type ConversionDescriptor = "Yes" | "No"

let name1: Combinable; 