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

const myskills = (skill)=>{
    console.log("i am expert in "+skill+" programming ")

}

myskills(prompt("Enter your skill: "))


const student= require('./StudentInfo')
const person = require('./Person') 
// because getName is the function so we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
// because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
// creating new Person
person1= new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")
