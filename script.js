// console.log("hello world");
// console.log("hello woeld");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// const name = "omid";
// console.log("omid");
// let houseOwn = "omid";
// console.log("omid");
// let teacher = "omid";
// console.log("omid");

// let schoolTeam = "baskitball";
// console.log("23");

// const x = Number(234);
// let y = 234;

// y = String(y);

// console.log(typeof y);

// let n = 10;

// switch (n) {
//   case n < 20:
//     console.log("ten");
//     break;
//   case 5:
//     console.log("five");
//     break;
//   default:
//     console.log("enter valid number");

// const users = [1, 2, 3, 4, 5];

// function multiplicationTable() {
//   for (let i = 1; i <= 10; i++) {
//     let row = "";
//     for (let j = 1; j <= 10; j++) {
//       row += i * j + "\t"; // \t for spacing between columns
//     }
//     console.log(row);
//   }
// }

// multiplicationTable();
// let name = "omid";
// console.log(name);
// let schoolNumber = "7";
// console.log(schoolNumber);
// let isRigesterid = true;
// console.log(isRigesterid);

// console.log(name +' '+ schoolNumber);
// let schoolName = "Akbar khan" , hasCourse = true
// console.log( schoolName+' ' +'has 35 course , does it have any course ? ' +' '+ hasCourse )
//  let name = "omid"
//  phoneNumber = '35'
// console.log(name+' '+phoneNumber);
//   let storeName = "omidi" , pobulic = true
//   console.log(storeName+' '+ 'is the best store between city?'+' '+ pobulic )
// let name="omid";
// let idNumber = '99'
// console.log(name+' '+idNumber);
// let pcName = "MSI campony" , highPower = false
// console.log(pcName+' '+'does it have high power?'+' '+highPower);

// let myArray = [1, 2, 3, 4, 5, "omid", true, null];
// myArray.push("aziz", "mohammad");
// myArray.splice(1,0,"")
// console.log(myArray[0], myArray[5], myArray[6]);
// let newArry = ["omid", "mohammad", "Aziz", "khan"];
// console.log(newArry.includes('omid'))
// console.log(newArry.indexOf('mohammad'))
// newArry.slice(1, 3);
// let pastArry = ("Aziz", "khan");
// let student1 = "omid";
// let student2 = "raza";
// let student3 = "aziz";
// let student4 = "mohammad";
// let students = ['omid', 'raza', 'aziz', 'mohammad'];
// console.log(students.length);
//omid = index 0
// RAZA = index 1
// aziz = index 2
// mohammad = index 3
// console.log(students);
// console.log(students[0]);
// console.log(students[3]);
// students[0] = 'amin';
// console.log(students);
// students[2] = 'khan';
// console.log(students);
// students[4] = ' bashir';
// console.log(students);
// students[6] = 'jack';
// console.log(students);

// function addElementsToArray(arr, count) {
//     for (let i = 1; i <= count; i++) {
//         arr.push(i); // Push the current value of i into the array
//     }
//     return arr;
// }

// // Example usage
// let numbers = []; // Initialize an empty array
// let result = addElementsToArray(numbers, 5); // Call the function to add 5 elements

// console.log(result); // Output: [1, 2, 3, 4, 5]

// ==== push ====\\
// const students = ['omid', 'aziz', ' ali', ' baloch'];
// function firstPush (arr, element) {
//   arr[arr.length] = element;
//   console.log(arr);
// }
// firstPush(students, "omid");
// const students = ["omid","aziz","mohammad", "frotan","haji" ];
// function secondPush (arr, element) {
//   arr[arr.length]=element
//   console.log(arr)
// }
// secondPush(students , "power")
// let persons =["omid", "haji", "mohammd", "aziz"]
//  function thirdPush(arr, element){
//   arr[arr.length] = element
//   console.log(arr);
//  }
//  thirdPush(persons, "jaja");
// =====finish===== //
//====== pop ====== //
// const persons = ["omid", "mohammad","aziz", "nazir" ];
// function firstPop (arr) {
//   persons.length=persons.length - 1;
//   console.log(arr);
// }
// firstPop(persons);
// let persons = ["omid", "aziz", "mohammad", "frotan"];
// function newShift(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr.length = arr.length - 1;
//   console.log(arr);
// }
// newShift(persons);
// finish//
// ==== unshift ==== //
// let persons = ["omid", " mohammad", "janan", "aziz"];
// function newPop (arr){
// persons.length = persons.length -1;
// console.log(arr);
// }
// newPop(persons);
// let persons = ["omid", "mohammad", "aziz", ];
// function newpop( arr) {
//   persons.length = persons.length - 1;
//   console.log(arr);
// }
// newpop(persons);
// let persons = ["omid", "aziz","mohammad"];
// function newShift(arr) {
//   for( let i =0; i < arr.length ; i++) {
//     arr[i] = arr[i+1];
//   }
//   arr.length = arr.length - 1;
//   console.log(arr);
// }
// newShift(persons);
// let persons = ["omid", "mohammad", "aziz"];
// function newShift( arr) {
//   for(let i = 0; i<arr.length; i++) {
//    arr[i]= arr[i + 1];
//   }
//   arr.length = arr.length - 1;
//   console.log(arr)
// }
// newShift(persons);
// let persons = ['omid','mohammad','aziz','janan'];
// function newShift(arr) {
//   for(let i = 0; i< arr.length; i++) {
//     arr[i]= arr[i+1];
//   }
//   arr.length=arr.length - 1;
//   console.log(arr);
// }
// newShift(persons);
// === finish === //
// === unshift === //
// let persons = ['omid', 'mohammad', 'aziz','janan'];
// function newUnshift(arr) {

///====yyyyyy=====/////
// let colors = [ "green", "black", "yellow", "pink"];
// for(let i = 0 ; i < colors.length; i ++)
//   console.log(colors[i]);
// }
// let pc ={
//   name : "msi",
//   price : "1000 dollers",
//   color : "black",
// funs: "2",
// screen : "15.6 inch",
// grafic: "4GB",
// }
// console.log(pc);
// let Pc = new Object();
// Object.name = 'msi';
// Object.price = '1000dollers';
// Object.color = 'black';
// Object.fans = '2';
// Object.screen = '15.6 inch';
// Object.grafic = '4GB';\
/// lessons///
// let pc = {
// name : "msi",
// price : "1000 dollers",
// color : "black",
// funs : " "
// let name = "omid";
// let lastName = "mohammadi";
// let age = 19;
// let all = `Hello , my name is ${name} ${lastName} and my age is ${age}`;
// console.log(all);
// // === let === //
// let x = 34;
// let y = 31;
// let result = x < y;
// if (result) {
//   console.log(result);
// } else {
//   console.log(result);
// }

// function add(a, b) {
//   var result = a + b;
//   return result;
// }

// if (true) {
//   var firstName = "Ahmad";
//   console.log(firstName);
// }
// console.log(result);
// console.log(firstName);
//=== distructuring ====//

//  let person = {name:"omid", age : 19};
// let {name , age } = person;
// console.log(name);
// console.log(age);
// export{person}






// let userlist = document.getElementById("userlist");

// btn.addEventListener("click", () => {
//   let item = document.createElement("li");
//   item.textContent = "I can do it";
//   userlist.appendChild(item);
// });