//for

// for (let index = 0(variable initialize); index < array.length (condition check); index++(increase variable)) {
//   const element = array[index];

// }

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is Best Number");
//   }
//   console.log(element);
// }
//console.log(element); //ReferenceError: element is not defined

// for (let i = 0; i <= 10; i++) {
//   console.log(`Outer loop value: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`Inner loop value: ${j} and inner loop ${i}`);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer loop value: ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + " * " + j + " = " + i * j);
//   }
// }

let myArray = ["Flash", "Superman", "Spiderman"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

//BREAK AND CONTINUE

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}
