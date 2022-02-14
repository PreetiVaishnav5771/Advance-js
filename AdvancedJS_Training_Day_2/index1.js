//.....Write a regex pattern that matches the password......

import java.util.regex.*;
class GFG {
  public static boolean
    isValidPassword(String password){
      String regex = "^(?=.*[0-9])"
      + "(?=.*[a-z])(?=.*[A-Z])"
      + "(?=.*[@#$%^&+=])"
      + "(?=\\S+$).{8,20}$";

      Pattern p = Pattern.compile(regex);
      if (password == null) {
        return false;
    }
    Matcher m = p.matcher(password);
    return m.matches();
  }
  public static void main(String args[])
  {
    String str1 = "Geeks@portal20";
        System.out.println(isValidPassword(str1));

        String str2 = "Geeksforgeeks";
        System.out.println(isValidPassword(str2));
      
      }
    }

//.....Write a regex pattern to match the valid email address.....

import java.util.Scanner;
public class ValidatingEmail {
   public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter your Email: ");
      String phone = sc.next();
      String regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
      //Matching the given phone number with regular expression
      boolean result = phone.matches(regex);
      if(result) {
         System.out.println("Given email-id is valid");
      } else {
         System.out.println("Given email-id is not valid");
      }
   }
}

//......Write a regex pattern that verifies credit card pattern..........

function is_creditCard(str)
{
 regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_creditCard("378282246310006"));

console.log(is_creditCard("37828224630006"));

//.........regex function to distinguish and pick the values of email address, phone number from the below paragraph.....
 
var text = 'orem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. mytraining@deqode.com Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. +91-20200-21210 Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce (+91)-20200-21210 ut placerat mt@test.inc orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.';

function extractEmails ( text ){
    return text.match(/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi);
    }
     
    $("#emails").text(extractEmails(text));

    function extractphonenumbers ( numbers ) {
      return text.match(/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi);
    }

    $("#phonenumbers").text(extractphonemunbers(numbers));


//..........Implement the setTimeout function using native javascript only. ...........

const loggedInUser = "Preeti";
function greet (username){
     alert ( "greet" + username + "!");
}

setTimeout (greet, 3000, loggedInUser);

//...............Provided a function that checks the validity of string and returns results via a callback.....

function validateString(['first', 'Second', 'thiRd', 4, false, 'true'], callback) {

  setTimeout(function () {

    // input is said to be valid if it is a lowercase string

    if (typeof input === "string" && input === input.toLowerCase()) {

      return callback(null, true)

    }


    return callback(new Error('Invalid string'), null)

  }, 500)

}

//.............Implement a javascript Array having the following prototype functions without using Native javascript array:

//......Foreach........

function foreach ( [1,2,3,4,5,6,7,8],callback) {
  const { length } = array;

  for (index = 0; index < length; index += 1){
    const value = array[index];
    callback (value, index, array);
  }
}

//........index of......

input = 2,3,3,4,3  index of (3)
function indexOf([2,3,3,4,3], (3)) {
  return findIndex(array, value => value === searchedValue);
 }

//........Shift...........

function shift([1,2,3,]) {
  const { length } = array;
  const firstValue = array[0];
 
  for (let index = 1; index < length; index += 1) {
    const value = array[index];
    array[index - 1] = value;
  }
 
  array.length = length - 1;
 
  return firstValue;
 }

 //......unshift.........

 function unshift [2, 3, 4]{
  const mergedArrays = concat(values, ...array);
  const { length: mergedArraysLength } = mergedArrays;
 
  for (let index = 0; index < mergedArraysLength; index += 1) {
    const value = mergedArrays[index];
    array[index] = value;
  }
 
  return array.length;
 }

 //............pop....

 function pop([1,2,3]) {
  const value = array[array.length - 1];
 
  array.length = array.length - 1;
 
  return value;
 }

 //.........push...

 function push([1, 2, 3, 4], ...(5)) {
  const { length: arrayLength } = array;
  const { length: valuesLength } = values;
 
  for (let index = 0; index < valuesLength; index += 1) {
    array[arrayLength + index] = values[index];
  }
 
  return array.length;
 }

 //.............Splice...

 const numbers = [1,2,3,4,5];

 number.splice(2,3);

 console.log()

