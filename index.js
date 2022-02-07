// Write a JavaScript program to test if the first character of a string is uppercase or not, if not then set the first character to uppercase
var char = "a";
var dub = char;

if (char == dub.UpperCase()) 
window.alert ("Uppercase");

else if (char == dub.LowerCase()) 
window.alert("LowerCase");

else window.alert("Something went Wrong");

// Deep clone Javascript Object

const circle : {
  radius: 1,
  draw (){
    console.log("draw");
  }
};

const another = object.assign({}, circle);

const another = {...circle};

console.log(another);

// Create a function to calculate the factorial of a number using closure

function fact(3){
    
        if (n==1)
           return 1;
        else
           return 3*fact(3-1);
}
var rvalue = fact(3);      

// Create a constructor function Calculator that creates objects with 3 methods

function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );