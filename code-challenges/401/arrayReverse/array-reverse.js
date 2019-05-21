//Worked with Matt

let newArr = [];
let counter = 0;

function reverseArray(arr){
  for(let i = arr.length-1; i >= 0; i--){
    newArr[counter] = arr[i];
    counter++;
  }
  return newArr;
}

let arr1 =  [1, 2, 3, 4, 5, 6];
console.log(reverseArray(arr1));
