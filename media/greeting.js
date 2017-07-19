var firstName = prompt("Hi there! What's your first name?");
alert('Hello ' + firstName);
var lastName = prompt("What's your last name?");

var output = document.querySelector('#greeting');
if(firstName && lastName){
    output.innerHTML = "<h1>Thanks for visiting, " + firstName + " " + lastName + ".</h1>";
} else {
    output.innerHTML = "<h1>Please tell us your first and last names!</h1>";
}
