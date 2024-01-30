function exampleFunction()
{
    if (true)
    {
        var functionScopedVar="I am function-scoped";
    }
    console.log(functionScopedVar);
}
exampleFunction(); 
 console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined
// let person={
//     name:"John",
//     age:30,
//     isStudent:false
// };
// console.log(person.name