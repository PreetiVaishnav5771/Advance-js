//..............javascript Promises..........

var promise = new Promise(function(resolve, reject) {
    const x = "Preeti is back";
    const y = "Preeti is back"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
     
  promise.
      then(function () {
          console.log('Success, She is back');
      }).
      catch(function () {
          console.log('Some error has occurred');
      });
  
  //...........Asynchronous Programming, (Event loop) in javascrpt....
  
  console.log("this is asynchronous programming 12");
  
  setTimeout( () => {
      for (let index = 0; index < 15; index ++) {
        const element = index;
        console.log ("this is index number" + index);
      }
  }, 3000);
  
  console.log ('done printing');
  
  //.......ES6 Syntax...........
  
   1. javascript syntax is case sensitive.Promise
   2. identifier starts with the var name("_,$ and number")
   3. //this is single line comment.
   4. /* this multi line commeny.*/
  
   var a = 20;
   var b = 30;
   if (a > b) {
     console.log ("a is greater  than b")
   }
  
   //.............ES6 classes............
  
   <script>
  class people {
    constructor(g) {
       this.Character = g
    }
  }
  class peopleforpeople extends people {
    disp() {
       console.log("No of Character:  "+this.Character)
    }
  }
  var obj = new peopleforpeople(15);
  obj.disp()
  </script>
  
  //.............javascript consturctor function.....
  
  // constructor function
  function Person () {
    this.name = 'John',
    this.age = 23,
  
     this.greet = function () {
        console.log('hello');
    }
  }
  
  // create objects
  const person1 = new Person();
  const person2 = new Person();
  
  // access properties
  console.log(person1.name);  
  console.log(person2.name);  
  
  //..........object destructuring in javascript......
  
  let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
  };
  
  let {
    name: {
        firstName,
        lastName
    },
    name
  } = employee;
  
  console.log(firstName); // John
  console.log(lastName); // Doe
  console.log(name); // { firstName: 'John', lastName: 'Doe' }
  
  //...........ES6 Arrow functions in javascript........
  
  function Car() {
    this.speed = 0;
  
    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(function () {
            console.log(this.speed); // undefined
        }, 1000);
  
    };
  }
  
  let car = new Car();
  car.speedUp(50);
  
  //........string-interpolation-in-javascript...
  
  <script>
    
    // String Interpolation
    function myInfo(fname, lname, country) {
        return `My name is ${fname} ${lname}. ${country} is my favorite country`; 
    }
    console.log(myInfo("john", "doe", "India"));
    </script>
  
  //..........ES6 Block scoping in javascript..........
  
  function foo(){
    if(true){
        var fruit1 = 'apple';        //exist in function scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope
  
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
  }
  
  foo();
  
   