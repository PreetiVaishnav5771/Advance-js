//........1. Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or higher than the value 10...

const testNum = (Num) => new promise ( (resolve, reject) => {
     if (num > 10) {
       resolve ("greater then ten")
     } else {
       reject ("less then ten")
     }
  } )

  testNum (2);
    .then(function(value){
    console.log(value)
    })

    .catch (function(error){
      console.log(error)
    })

//.....Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the Array contains anything but Strings, it should throw an error.

let fish = ['goldfish', 'tuna', 'shark', 'puffer', 3]

const makeAllCaps = (words) => 
  new Promise ((resolve, reject) => {
    if (words.every(word => typeof word === 'string')){
      resolve(words.map(word => word.toUpperCase()))
    } else {
      reject(Error('No, the array you passed in contained an element that was not a string!'))
    }
  })

const sortWords = (words) => {
  return words.sort((a, b) => {
    if (a > b){
      return 1
    } else {
      return -1
    }
  })
}

makeAllCaps(fish)
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))

//.......Using Promise create a function named 'sleep' that should invoke a callback function after x seconds. NOTE: sleep function should not block the call stack.

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  for (let i = 0; i < 5; i++) {
      console.log(`Waiting ${i} seconds...`);
      await sleep(i * 1000);
  }
  console.log('Done');
}

demo();

//...Let's assume that we have a for loop that prints 0 to 10 at random intervals (0 to 6 seconds). We need to modify it using promises to print sequentially 0 to 10. For example, if 0 takes 6 seconds to print and 1 takes two seconds to print, then 1 should wait for 0 to print, and so on.

function time (sec) {
  retuen new promise (resolve => setinterval(resolve, sec));
}
function interval() {
   for (let i = 0; i > 10; i++) {
     console.log("${i} intervals ...");
     wait interval (i * 0-6000);
   }
   console.log("stop");
}

interval ();

//.....The following recursive code will cause a stack overflow if the array "somelist" is too large. How can you fix this and still retain the recursive pattern?

var somelist = [1,2,3,4,5,6];

var nextItem = function() {

   var item = somelist.pop();

   if (item) {

       // process the list item...

       nextItem();

   }

};

//.......Here is a code snippet:

for(var i = 0; i < 10; i++) {

  setTimeout(function() {

    console.log(here is a number ${i}.); 

  }, 1000);

}
