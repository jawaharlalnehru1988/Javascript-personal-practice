// function sumOfEvenNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// // Example usage:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = sumOfEvenNumbers(numbers);
// console.log(result); 

// function isDivisible(num1, num2) {
    
//     if (num2 === 0) {
//       return false;
//     }
  
//     return num1 % num2 === 0;
//   }
  
//   // Example usage:
//   console.log(isDivisible(10, 2));  
//   console.log(isDivisible(7, 3));   
//   console.log(isDivisible(15, 5));  
//   console.log(isDivisible(8, 0));   


function filterStringsByLength(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length >= 5) {
            result.push(strings[i]);
        }
    }
    return result;
}

// Example usage:
const inputArray = ["apple", "cat", "banana",
     "dog", "elephant"];
const result = filterStringsByLength(inputArray);
console.log(result); 
