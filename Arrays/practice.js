// Map, Filter, Reduce:

const arr = [
    { firstName: "Prasad", lastName: "Khose", age: 24 },
    { firstName: "Dave", lastName: "Gen", age: 70 },
    { firstName: "John", lastName: "Boy", age: 24 },
    { firstName: "Steve", lastName: "Hardy", age: 34 }
]

const output = arr.filter(user => user.age > 25).map(user => user.firstName);

console.log(output);