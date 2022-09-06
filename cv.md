# Danila Bileichyk

---
### **Contact information**
**Telegram & Github:** @rikossu   
**Discord:** cherriboi   
**Phone number:** +375 25 652 42 14   
**E-mail:** rikossu.official@gmail.com

---
### **About myself**
I started writing code when I was still in college. I tried many different programming languages: Delphi, C, Java(We even had pratice in this language – in Android Studio), and some JS.

At the same time I had some hobbies: 
* Music & video creation (Yeap, I had a channel on YT, but now it's deleted, but I still make some music – it definitely helps me create some background music for my future game!)
* Watching anime 
* Physical activity

At the moment, I have already forgotten JS a little, but I want to catch up and I get a job as a full-fledged front-end developer! I hope that I will be able to fill in all my gaps and learn something new for myself!

---
### **Skills**
* HTML5, CSS3, JS(basics)
* Git
* Adobe Photoshop
* Sony Vegas
* FL Studio

---
### **Code Example**
```
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
```

---
### **Education**
* **College:**  BSUIR affiliate "Minsk Radioengineering College", Electronics Technician major
* **Courses (Self-studying):**
    + Code-basics
    + learn.javascript
    
---
### **Languages**
* English – **A2** (Practiced communicating with foreigners)
* Russian – **C2** (My native language)
* Belarusian – **B2** (It's my second native language, but that level was caused I speak mostly Russian)
* Japanese – **A1** (Self-studying)
