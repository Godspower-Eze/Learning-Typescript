// const person1: object = {
//     name: "Godspower Eze",
//     age: 20
// }
// This throws an error because the type declaration above 
// blocks the object to set the data structure as a dictionary 
// rather an object
// console.log(person1.name)

// const person2: {
//     name: string; 
//     age:number;
// } = {
//     name: "Godspower Eze",
//     age: 20
// }
// This solves the problem above but it's redundant because Typescript
// does type interfacing by default, figuring out the times without definition
// console.log(person2.name)

enum Role {
    ADMIN,
    READ_ONLY_USER,
    AUTHOR
};

enum Role2 {
    ADMIN = 5,
    READ_ONLY_USER,
    AUTHOR
};

enum Role3 {
    ADMIN = "ADMIN",
    READ_ONLY_USER = 100,
    AUTHOR = 200
};

// The next variable READ_ONLY_USER the
// increament of ADMIN which is 6 and same for AUTHOR(takes up 7)

const person3: {
    name: string;
    age: number;
    hobbies: string[];
    roles: [number, string]; // This is a tuple in Typescript
} = {
    name: "Godspower Eze",
    age: 20,
    hobbies: ["Photography", "Playing the Guitar"],
    roles: [1, "author"]
}

const person4 = {
    name: "Godspower Eze",
    age: 20,
    hobbies: ["Photography", "Playing the Guitar"],
    roles: Role3.ADMIN
}


let favoriteActivities: string[]
favoriteActivities = ["Swimming"]

let unwantedActivities: any[]
unwantedActivities = ["Swimming", 12]

// person3.roles[1] = 10
// Throws an error because the type of the value on index 1 must be a string

// person3.roles = [10, "Police", "Cleaner"] 
// This also throws an error because the 
// length exceeds the specified length of two
 
person3.roles.push("admin")
// This works; weird. 
// This is because array methods are an exception to the rules of tuples in Typescript 