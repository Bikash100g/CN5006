const number1 = parseInt(prompt('Enter  your first number : '));
const number2 = parseInt(prompt('Enter your  second number : '));
const operator = prompt('Choose your operator("+","-","*","/") : ');

if (operator=="+"){

    result = number1+number2
    Console.log(result)
}

else if (operator=="-"){

    result = number1-number2
    Console.log(result)
}

else if (operator=="*"){

    result = number1*number2
    Console.log(result)
}

else if (operator=="/"){

    result = number1/number2
    Console.log(result)
}

else {

    result = prompt("Please enter valid input!")
    Console.log(result)
}

