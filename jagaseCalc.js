const infiniteLoop=0

//Variables

let option=0;

let firstNumber=0; //First number.
let secondNumber=0; //Second number.

let result=0; //Result of the operation.

firstNumber=Number(prompt("*** The Jagase Calculator ***\nThis calculator operates with two numbers (more features comin' soon!)\nPlease enter the first number:")); //Number() converts the prompt input to a numeric value since prompt takes the input as a String!

secondNumber=Number(prompt("Now enter the second number:"));

while (infiniteLoop==0){
	
	option=prompt("First number: "+firstNumber+"\nSecond number: "+secondNumber+"\nLast result: "+result+"\n\nPlease enter the wished operation:\n1. Sum\n2. Rest\n3. Multiplication\n4. Division\n5. Modify numbers\n6. Exit (stop script)");
	
	if (option==1){
		result=firstNumber+secondNumber;
		alert("Your result is: "+result);
	} else if (option == 2){
		result=firstNumber-secondNumber;
		alert("Your result is: "+result);
	} else if (option==3){
		result=firstNumber*secondNumber;
		alert("Your result is: "+result);
	} else if (option==4){
		if (secondNumber==0){
			alert("You cannot divide by 0...");
		}else{
			result=firstNumber/secondNumber;
			alert("Your result is: "+result);
		}
	} else if (option==5){
		let modify=0;
		option2=prompt("What number will be modify?\n1. First number\n2. Second number");
		if (option2==1){
			firstNumber=Number(prompt("Please enter a new value for the first number:"));
		} else if (option2==2){
			secondNumber=Number(prompt("Please enter a new value for the second number:"));
		}
	} else if (option==6) {
		break;
	
	} else if (option!=1 || 2 || 3 || 4 || 5){
		alert("Please enter a valid option (1-6)...");
	}
}