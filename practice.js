function exampleFunction()
{
    if (true)
    {
        var functionScopedVar="I am function-scoped";
        console.log(functionScopedVar);//I am function-scoped
    }
}
exampleFunction();
console.log(functionScopedVar);//Error:functionScoped is not defined