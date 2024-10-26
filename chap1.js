//Q1
//let firstName = prompt("Enter your first name:");
//let lastName = prompt("Enter your last name:");


//let fullName = firstName + " " + lastName;


//alert("Hello, " + fullName + "! Welcome!");


//Q2

//let mobileModel = prompt("Enter your favorite mobile phone model:");


//let inputLength = mobileModel.length;


//alert("The length of your input is: " + inputLength);


//Q3
//let word = "Pakistani";

        
 //let indexOfN = word.indexOf('n');

        
//document.write("The index of 'n' in the word 'Pakistani' is: " + indexOfN);

//Q4
//let phrase = "Hello World";

        
        //let lastIndexOfL = phrase.lastIndexOf('l');

        
        //document.write("The last index of 'l' in 'Hello World' is: " + lastIndexOfL);

//Q5
// Prompt the user for their first and last name
//let firstName = prompt("Enter your first name:");
//let lastName = prompt("Enter your last name:");


//let fullName = firstName.concat(" ", lastName);


//alert("Hello, " + fullName + "! Welcome!");


//Q7

//let city = "Hyderabad";

        
  //      let newCity = city.replace("Hyder", "Islam");

        
    //    document.write("The new city name is: " + newCity);


//Q8
//let stringValue = "472";

        
  //      let numberValue = Number(stringValue);

        
    //    document.write("Value: " + stringValue + " | Type: " + typeof stringValue + "<br>");
      //  document.write("Value: " + numberValue + " | Type: " + typeof numberValue);

        //Q10
        //let userInput = prompt("Enter some text:");

        
        //let capitalLetters = userInput.toUpperCase();

        
        //document.write("Input in capital letters: " + capitalLetters);

        //Q11
        //let userInput = prompt("Enter some text:");

        
        //function toTitleCase(str) {
           
          //  let words = str.split(' ');

           
            //let titleCasedWords = [];

           
            //for (let i = 0; i < words.length; i++) {
                
              //  let word = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
                
                //titleCasedWords.push(word);
            //}

           
           // return titleCasedWords.join(' ');
        //}

       
//        let titleCaseInput = toTitleCase(userInput);

  //      document.write("Input in title case: " + titleCaseInput);

  //Q12
  //var num = 35.36;

  
  //var numString = num.toString();

  
  //var result = numString.replace('.', '');

  //document.write("The result is: " + result);

  //q13
  //function isValidUsername(username) {
    
    //let specialChars = ['@', '.', '!', ','];
    //for (let i = 0; i < specialChars.length; i++) {
        //if (username.includes(specialChars[i])) {
          //  return false; 
        //}
    //}
    //return true;
//}


//let username = prompt("Enter your username:");


//while (!isValidUsername(username)) {
  //  username = prompt("Invalid username! Please enter a valid username (no special symbols like @, ., !):");
//}


//document.write("Valid username: " + username);

//Q14
//var A = ["cake", "apple pie", "cookie", "chips", "patties"];

        
  //      var userInput = prompt("Enter an item to search:");

        
    //    var itemFound = A.some(item => item.toLowerCase() === userInput.toLowerCase());

        
      //  if (itemFound) {
        //    alert("The item '" + userInput + "' is available in the list.");
        //} else {
          //  alert("The item '" + userInput + "' is not available in the list.");
        //}


        //Q15
       // function isValidPassword(password) {
            
         //   const hasAlphabet = /[a-zA-Z]/.test(password);
           // const hasNumber = /[0-9]/.test(password);
            
            
            //const doesNotStartWithNumber = isNaN(password.charAt(0));

            
            //const isLongEnough = password.length >= 6;

            
            //return hasAlphabet && hasNumber && doesNotStartWithNumber && isLongEnough;
        //}

        
        //let password = prompt("Enter your password:");

        
        //while (!isValidPassword(password)) {
          //  password = prompt("Invalid password! Please enter a valid password (must contain alphabets, numbers, not start with a number, and at least 6 characters long):");
        //}

        
        //alert("Your password is valid!");
           
  








