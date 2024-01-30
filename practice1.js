// console.log(x);
// var x=5;
// console.log(x);
// console.log(x);
// let x=5;
// console.log(x);
//****object 
// let person={name:"Aman",age:30,isStudent:false};
// console.log(person.name,person.age);
//****Array
// let fruits=[1,"Banana","Orange"];
// console.log(fruits[0]);
//****Function
// function add(a,b)
// {
//     return a+b;
// }
// var a=add(2,3);
// console.log(a);
//****Typeof Operator
// let exampleVar="Hello";
// console.log(typeof(exampleVar));
//****Type coercion
// let result=5+"5";
// console.log(result);
//****Comparsion Operator
// let a=10;
// let b=5;
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);
//****Logical Operator
// let p=true;
// let q=false;
// console.log(p&&q);//Logical AND:false
// console.log(p||q);//Logical OR: ture
// console.log(!p);//Logical NOT
// const delayedFunction=() =>{
//     console.log('Delayed function executed!');
// }
// setTimeout(delayedFunction,2000);//Excutes every 1 second
//setInterval Function
// const repeatFunction = () =>{
//     console.log('Repeat function executed!');
// };
// const interval=setInterval(repeatFunction,1000);
//Function to be executed at intervals
// function repeatFunction()
// {
//     console.log('Executing repeated function....');
// }
//set an interval (execute repeatedFunction every 1000 millisecond)
// const intervalId=setInterval(repeatFunction,1000);
// //After some time(e.g., 5000 millisecond),stop the interval
// setTimeout(() => {
//     clearInterval(intervalId);//Stop the interval
//     console.log('Interval stopped.');
// },5000);
function parentFunction(name, callback)
{
    setTimeout(callback,1000);
    console.log("Hey "+name);
}
parentFunction("Random String",function()
{
    console.log("Hey I am callbackfunction");
});