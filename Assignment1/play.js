// Create an arry containing the name of friut

// let Friut = [ "Apple" , "Mango" , "Bnana" , "Grapes" , "Peach"];

// Retrive 3rd element of colour array

let colour =["red","green","blue","yellow","purple"];
colour[2];
console.log(colour[2]);

let cities =["London","Paris","Tokyo","Berlin"];
cities.splice(1,1,"New York");
console.log(cities);


let Friuts=["Apple", "Banana" , "Mango"];
Friuts.push("Strawberry");
console.log(Friuts);


let Vagitables = ["Carrot","Broccoli","Asparagus"];
Vagitables.pop();
console.log(Vagitables);


let Days = ["Tuesday","Wednesday","Thursday"];
Days.unshift("Monday");
console.log(Days);

let sports = ["Cricket","Basketball","Tenis"];
sports.shift();
console.log(sports);

let books =["1984","Brave New World","Fahrenheit 451","The hand made tables"];
console.log(books.length);


let num1 = [1,2,3];
let num2 = [4,5,6];
let num = [num1.concat(num2)];
console.log(num);

let name = ["Hamza","Umar","Fasil","Tanveer"];
name.splice(0,3);
console.log(name);


let countries=["USA","Pakistan","India","China","Canada","Iran"];
countries.splice(2,2);
console.log(countries);


let fruti = ["Apple","Banana","Cherry"];
console.log(fruti.indexOf("banana"));

let number = [1,2,3,4,5]
sum=0;
for(val of number) {
    sum=val+sum;
    console.log(sum);
}
// Find the type of array

array =[];
console.log(typeof array);


// convert array into string

let digit = [1,2,3,4,5];
console.log(digit.toString());



let numArray = [1,2,3,4,5];
numArray.reverse();
console.log(numArray);



let alp = ["Banana","Apple","Cheery"];
alp.sort();
console.log(alp);



let doble = ["Hello","World"];
doble.join();
console.log(doble.join());
    




