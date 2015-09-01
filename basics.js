/* Create a `myName` variable and assign it a String value */
var myName = "naomi owens";
/* Create a `person` variable and give it 2 properties,
 * `name`, assign it the same name as before,
 * as well as an `age` (number);
 */
 var person = {
  name: "naomi owens",
  age: 40,
 };

/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */
 function greet(name){
  console.log("Hello, my name is " + name);
 }
 greet("naomi");

/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */
 var canDrive;
 if (person.age > 16){
  canDrive = true;
 }

/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */
var dataTypes = ["string", 40, undefined, person, person[0], null, true];

/* Create a Dog object
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute with the value of 'Spot'
 */
var dog = {
  name: "Spot",
  bark: function (){
    console.log("bark");
  }
};
dog.bark();