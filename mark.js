 /*
* @name: Assignment1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Chidiebere Nwigwe Godwin
*/ 
let button = document.getElementById("button").addEventListener("click",() => {
    let mark = document.getElementById("mark");
    let message = document.getElementById("message");
   
// js code for errors in input
    try {
        if(mark.value.trim() == "")  throw "empty";
        if (isNaN(mark.value)) throw "not a number";
        mark.value = parseInt(mark.value);
        if (mark.value < 0) throw "less than 0.Input should range from 0 to 100.";
        if (mark.value > 100) throw "more than 100.Input should range from 0 to 100.";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }

    // js code for grade conversion
    mark.value = parseInt(mark.value);
    if (mark.value > 90 && mark.value <= 100)  message.innerHTML = "Grade is A";
    if (mark.value > 80 && mark.value <= 90)  message.innerHTML = "Grade is B";
    if (mark.value > 70 && mark.value <= 80 )  message.innerHTML = "Grade is C";
    if (mark.value > 50 && mark.value <= 70)  message.innerHTML = "Grade is D";
    if (mark.value < 50  && mark.value >= 0)  message.innerHTML = "Grade is F";
 
})