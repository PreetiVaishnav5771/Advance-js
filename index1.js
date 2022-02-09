// Javascript regular function modifier (i "case insensitive" and g "global")
let str = "This is improve file for improve project";
let reg = /improve/;

//  .........for execute
let response = reg.exec(str);
console.log(response);

// ......for test.......

let str = "This is improve file for improve project";
let reg = /improve/i;

let response = reg.test(str);
console.log(response);

// .....for match........

let str = "This is improve file for improve project";
let reg = /improve/i;

let result = str.match(reg);
console.log(result);

// ...for search................

let str = "This is improve file for improve project";
let reg = /improve/i;

let result = str.search(regex);
console.log(result);

// ......for replace.....................

let str = "This is improve file for improve project";
let reg = /improve/i;

console.log(str);
let result = str.replace(reg, "code improve");
console.log(result);

// .......meta charater.......................

str = "This is improve file for 24 improve project color exampl?e fixe*d";
reg = /improve/i;
reg = /^this/; // ....start
reg = /project$/; //....end
reg = /f.le/; //.....single charater match any
reg = /f*le/; //...match anyany 0 or more
reg = /colou?r/; //.... u is optional
reg = /exampl?e/; //....? \
reg = /fixe\*d/; //.....* \
reg = /w+rove/;
reg = /\Wfile/; //.... start _. alphabet number
reg = /\W+file/; //.....for not matching the character
reg = /\sfor/; // ....for white space (match charater)
reg = /\Sfor/; //.....(for not matching the character)
reg = /\dimp/; //.... for checking the digits
reg = /\Dimp/; //....for not checking the digits
if (reg.test(str)) {
  let finalresponse = reg.exec(str);
  console.log(finalresponse);
} else {
  console.log("match not");
}

//..............Brackets.......

str =
  "This is improve cool file for code code improve project color exampl?e fixe*d";

reg = /imp[tyr]ove/; //.....select one fron tyr
reg = /imp[a-z]ove/;
reg = /imp[A-Z]ove/; // ...for capital letter
reg = /imp[^xyz]ove/; //....For not matching the character ^

reg = /co{2}l/; //.....matching two "OO"
reg = /co{0,2}l/; //....for matching 0,1,2 "OO"

if (reg.test(str)) {
  let finalresponse = reg.exec(str);
  console.log(finalresponse);
} else {
  console.log("match not");
}

//.........RegExp Object Properties....
//......Test method......

var phonenumber = "1234567891";
var pattern = /^[0-9]{10}$/;

if (pattern.test(phonenumber)) {
  console.log("valid phonenumber");
} else {
  console.log("invalid phonenumber");
}

//....EXec method..........

var myname = "I am Javascript, I am the best, I am pretty";
var pattern = /am/g;
var array = [];

while ((array = pattern.exec(myname)) != null) {
  console.log("found word:", array[0], "<br/>");
  console.log("location:", array.index, "<br/>");
}

//..............Callbacks (Higher-Order) Functions.......

const student = [
  {name: "preeti", subject: "javascript"},
  {name: "vijendra", subject: "machine-learning"}
]

function enrollstudent(student, callback){
  settimeout (function(){
      student.push(student);
      console.log(student has been enrolled);
      callback();
  }, 3000);
}

function getstudents(){
  settimeout (function(){
      let str = "";
      students.foreach(function(student){
       str += <li> $(student.name)</li>
      });
      console.log("students");
      console.log("student have been fetched");
  }, 1000);
}

function enrollstudent(student: any): void than"}
enrollstudent(newstudent, getstudents);
getstudents();

//..............callback hell.......

settimeout (() => {
    console.log("Called to HR");

    settimeout ( () => {
      console.log("Called to Director");

      settimeout ( () => {
       console.log("update some information");

      }, 1000)

    }, 1000)

}, 2000)