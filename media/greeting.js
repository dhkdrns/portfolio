var name = prompt("Hi there! What's your name?");
alert('Hello ' + name);

var output = document.querySelector('#greeting');
output.innerHTML = "<h1>Thanks for visiting, " + name + ".</h1>";
