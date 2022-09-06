/*
Find the function value: z = ((a - 3) * b / 2) + c
*/

//solution:

//create a boolean counter that is activated on successful validation
let check = false; 

//create variables that will be used for converting strings into number
let a;
let b;
let c;

//a final variable that will be used to show us the result
let z;


while(!check){
    //ask the user for the value of variable A
    const firstRequest = prompt("enter the first number");

    //ask the user for the value of variable B
    const secondRequest = prompt("enter the second number");

    //ask the user for the value of variable C 
    const thirdRequest = prompt("enter the third number"); 

    //converting into numbers
    a = parseFloat(firstRequest);
    b = parseFloat(secondRequest);
    c = parseFloat(thirdRequest);

    //if we get NaN i.e. Not a Number – the cycle will start again
    if(Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)){
        const ok = confirm("oops, looks like you entered something other than a number...\nTry again."); 
        if(ok){
            continue;
        }else{
            exit();
        }
    }

    check = true;
}

//calling a function that will return a result
z = formula(a,b,c); 

function formula(a,b,c){
    //calculating...
    z = ((a - 3) * b / 2) + c;
    return z;
}

//Yay! We did it =)
confirm("Success! Your number is: " + z);
