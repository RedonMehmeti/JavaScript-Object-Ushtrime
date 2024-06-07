// const car = {type:"Audi", model:"A8", color:"Black"}
// document.getElementById("demo").innerHTML = "The car type is " + car.color;


// const fruit = {type:"Banana", color:"Yellow"}
// document.getElementById("demo").innerHTML = "the fruit type is " + fruit.type;


// const person = {
//     firstName: "Redon",
//     lastName: "Mehmeti",
//     age: "17",
//     eyeColor: "Brown"
// }


// document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old ";

const person = new Object();
person.firstName = "Redon";
person.lastName = "Mehmeti";
person.age = "17";
person.eyeColor = "Brown";

document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old ";
