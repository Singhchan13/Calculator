let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";    //To store the result
let arr = Array.from(buttons);    //To run forEach loop
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string)      //For evaluation of string
            input.value = string;      //To show the value of sring in input box
        }
        
        else if(e.target.innerHTML == 'AC'){
            string = "";      //To clear the string
            input.value = string;
        }

        else if(e.target.innerHTML == 'C'){
            string = string.slice(0, -1);  //To remove the last character from string
            input.value = string;
        }

        else{
        string += e.target.innerHTML;  //If the button is not equal than we can add it in a string
        input.value = string;
        }
    })
})