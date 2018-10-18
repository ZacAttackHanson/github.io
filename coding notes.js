console.log ("hello There, " firstname+ " " + lastname)

var firstname = prompt("what is your first name?")
var lastname = prompt("what is your lastname?")
var age= prompt("How old are you?")


console.log("Hello, There "+ firstname+lastname + " You are a bold one!")
console.log ("I am " + age + " years old")


if (age=Math.sign('-age')) { console.log ("Error Age Must be greater than 0")
}


else if (age=21) {console.log("Happy 21st Birthday! Have a free Shot!")}





/* Age Game Code /*

var age= Number (prompt("how old are you?"))
var days = age*365


if(age<0) {console.log("comeback when you are out of the womb")};

if(age===21) {console.log("Happy 21st Birthday have a shot")};

if(age % 2 !==0 ) {console.log("your age is odd")};

if(age % Math.sqrt(age) === 0) {console.log("your age is a perfect square")};




alert(" you are rougly "+ days + " days old. ")/*

*/

/*var secretnumber = 94
var guess = Number (prompt("guess the Number!"))



if(guess>secretnumber){console.log("Your Guess is too High")};
if (guess>secretnumber){console.log("your guess is too high")}
else if (guess<secretnumber){console.log("your guess is too low")}
else if (guess===secretnumber){console.log("You are Correct!")}
*/ a

/* Annoying game code v1 

var answer= prompt("are we there yet?")

while(answer !== "yes"){var answer= prompt("are we there yet?")}

alert("Yay Weve Made it!")

/* Annoying Game code V/*

var answer= prompt("are we there yet?")

while(answer.indexOf("yes")===-1) {var answer= prompt("are we there yet?")}

alert("Yay Weve Made it!") */k


/*
function isEven(num) {if (num % 2===0 ) {return true;} else {return false}
	// body...
}function factorial(num){


	var result=1
for (var i =1.length - 1; i >= 0; i--) {
1[i]
}
}/*


_____________Failed Todo List Code_________________

var todos= ["Buy new turtle!" ];

var input= prompt("what wouold you like to do?")


	while(input!=="quit"){

		if (input==="list") (console.log(todos;)

else if (input=== "new") {

		var newTodo = prompt("enter new todo");

		todos.push(newTodo);}

		var input= prompt("what wouold you like to do?")
	




	}

		console.log ("ok, you quit the app!") 
__________________________________________________________



____________Failed Todo LIst Code V2______________________


window.setTimeout (function () {



var todos = ["buy a new turtle!"]

var input = prompt("what would you like to do?");

while(input !== "quit"){

	if(input==="list") {console.log(todos)}

		else if (input==="new"){

			var newTodo = prompt("Enter New To do.")

			todos.push(newTodo);

		}

		input = prompt("what would you like to do?")}

		console.log("Ok, You Quit the app!")


	},500)



	_______________________________________________________________


	Working Code for TOdo list_____________________________________

var z = ["buy a new turtle!"]

var input = prompt("what would you like to do?");




window.setTimeout (function () {



while(input !== "quit"){

	if(input==="list") {console.log(z)}

		else if (input==="new"){

			var newTodo = prompt("Enter New To do.")

			z.push(newTodo);

		}

		input = prompt("what would you like to do?")}

		console.log("Ok, You Quit the app!")


	},500)

	______________________________________________________________




---------------------Functions Array Practice----------------------

console.log("hey baby")

function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i])
	}
	// body...
}

printReverse([5,2,8,0])


function isUniform(arr){
	var first=arr[0];
for(var i=1; i < arr.length; i++){
	if(arr[i]!== first){return false}
}
return true;
}



function sumArray(arr){
	var total=0;
	arr.forEach(function(element) {
		total+= element;
		// body...
	});
	return total;

}


function max(arr){
	var max = [0];
	for (var i = 1; i <  arr.length; i++) {
		if(arr[i]> max)	{
			max = arr[i];
		}
	
}
return max;}
____________________________________________________________________


____________________________Movie App Code_______________________


var movies=

 [

{ Title: "Star Wars",
Rating: 4.5,
Viewed: false }

,

{ Title: "Operation Finale",
Rating: 4,
Viewed: true }

,

{Title: "Man of Steel",
Rating: 5,
Viewed: true}

,

{Title: "Star Trek",
Rating: 3,
Viewed: false}

]

movies.forEach(function(movie){
    var result= "you have " ;
    if(movie.viewed){result +="true";}
    else{result += "not seen ";}
    result += "\"" + movie.Title + "\" - ";
    result += movie.Rating + " stars";
    console.log(result)})
---------------------------------------------------------------------


