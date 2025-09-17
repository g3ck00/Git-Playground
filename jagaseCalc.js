const infiniteLoop=0

//Variables

let option=0;

let firstNumber=0; //First number.
let secondNumber=0; //Second number.

let result=0; //Result of the operation.

//<<<<<<< HEAD
//Intentional conflict
//alert("Coded by the Devil!");
//=======
//Intentional conflict (selected as desired version)
//alert("Coded by someone, but not me!");
//>>>>>>> feature-conflict

firstNumber=Number(prompt("*** The Jagase Calculator ***\nThis calculator operates with two numbers (more features comin' soon!)\nPlease enter the first number:")); //Number() converts the prompt input to a numeric value since prompt takes the input as a String!


secondNumber=Number(prompt("Now enter the second number:"));

while (infiniteLoop==0){
	
	option=prompt("First number: "+firstNumber+"\nSecond number: "+secondNumber+"\nLast result: "+result+"\n\nPlease enter the wished operation:\n1. Sum\n2. Rest\n3. Multiplication\n4. Division\n5. Modify numbers\n6. Exponentation\n7. Square root\n9. Exit (stop script)");
	
	if (option==1)
	{
		result=firstNumber+secondNumber;
		alert("Your result is: "+result);
	} 
	else if (option == 2)
	{
		result=firstNumber-secondNumber;
		alert("Your result is: "+result);
	} 
	else if (option==3)
	{
		result=firstNumber*secondNumber;
		alert("Your result is: "+result);
	} 
	else if (option==4)
	{
		if (secondNumber==0){
			alert("You cannot divide by 0...");
		}else{
			result=firstNumber/secondNumber;
			alert("Your result is: "+result);
		}
	} 
	else if (option==5)
	{
		let modify=0;
		option2=prompt("What number will be modify?\n1. First number\n2. Second number");
		if (option2==1){
			firstNumber=Number(prompt("Please enter a new value for the first number:"));
		} else if (option2==2){
			secondNumber=Number(prompt("Please enter a new value for the second number:"));
		}
	}
		
	//Suggested function throught pull request!	
	else if (option==6)
	{
		alert("Notice that first number will be the base and the second number will be the exponent!");
		result=firstNumber**secondNumber;
		alert("Your result is: "+result);

	}
	
	else if (option==7)
	{
		alert("Notice that first number will be the radicand!");
		result=Math.sqrt(firstNumber);
		alert("Your result is: "+result);
	}
	
	else if (option==9)
	{
		break;
	
	} 
	else if (option!=1 || 2 || 3 || 4 || 5 || 6 || 9){
		alert("Please enter a valid option (1-6)...");
	}
}