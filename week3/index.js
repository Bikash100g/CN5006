//defining a function

prompt=require('prompt-sync')()
function Employeeinfo(name,salary){

    console.log("welcome "+name+" your salary is "+salary)

}

console.log("Welcome to the program of the day")
//declaring variables
var name = prompt("Enter your name: ")
var salary = parseInt(prompt("Enter the salary: "))

//callin the function
Employeeinfo(name,salary)

