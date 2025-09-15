alert("This is a new branch!");

let option=0;

let firstNumber=0; //First number.
let secondNumber=0; //Second number.

let result=0; //Result of the operation.

option=prompt("*** The Jagase Calculator ***\nPlease enter the wished operation:\n1. Sum\n2. Rest\n3. Multiplication\n4. Division");

if (option==1){
	firstNumber=Number(prompt("Please, enter the first number")); //Number() converts the prompt input to a numeric value since prompt takes the input as a String!
	secondNumber=Number(prompt("Please, enter the second number"));
	result=firstNumber+secondNumber;
	alert("Your result is: "+result);
} else if (option == 2){
	firstNumber=Number(prompt("Please, enter the first number"));
	secondNumber=Number(prompt("Please, enter the second number"));
	result=firstNumber-secondNumber;
	alert("Your result is: "+result);
} else if (option==3){
	firstNumber=Number(prompt("Please, enter the first number"));
	secondNumber=Number(prompt("Please, enter the second number"));
	result=firstNumber*secondNumber;
	alert("Your result is: "+result);
} else if (option==4){
	firstNumber=Number(prompt("Please, enter the first number"));
	secondNumber=Number(prompt("Please, enter the second number"));
	if (secondNumber==0){
		alert("You cannot divide by 0...");
	}else{
		result=firstNumber/secondNumber;
		alert("Your result is: "+result);
	}
} else if (option!=1 || 2 || 3 || 4){
	alert("Please enter a valid option (1-4)...");
}