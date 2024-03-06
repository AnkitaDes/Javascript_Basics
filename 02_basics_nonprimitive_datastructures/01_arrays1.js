//ARRAY

//JavaScript array-copy operations create shallow copies (copy whose properties share the same references as the source object from whcih the copy is made). (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies(donot share the same reference)).

const myArr = [0, 1, 2, 3, 4, 5];
// const myHeros = ["Spiderman", "Batman", "Superman"];
// const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr[0]);

//Array Methods

//Add and remove items at the end of array
// myArr.push(6); //add last
// myArr.push(7);
// myArr.push(8);
// myArr.pop(); //remove last

//Add and remove items at the start of array
// myArr.unshift(9); //add first
// myArr.unshift(91);
// myArr.shift(); //remove first
// console.log(myArr);

//Ask for something and get a boolean as a response

// console.log(myArr.includes(9));
// console.log(myArr.includes(5));

// //Ask for something and get a response

// console.log(myArr.indexOf(9)); //-1  //if item is not in the array returns -1
// console.log(myArr.indexOf(2));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//Slice and Splice
console.log("Original arry:", myArr);

const mySlicedArr = myArr.slice(1, 3);

console.log("mySlicedArray:", mySlicedArr);
console.log("OriginalArrayafterSlice:", myArr);

const mySplicedArr = myArr.splice(1, 3);
console.log("mySplicedArr:", mySplicedArr);
console.log("OriginalArrayafterSplice:", myArr);
