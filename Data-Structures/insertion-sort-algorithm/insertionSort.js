'use strict';


function insertionSort(arr){

  if(arr.some(isNaN)){
    throw new Error('Not all elements are numbers');
  }
  for(let i = 0; i < arr.length; i++){
    let j = i - 1;
    let temp =  arr[i];
    while(j >= 0 && temp < arr[j]){
      arr[j + 1] = arr [j];
      j = j - 1;
    }
    arr[ j+ 1] = temp;
  }
}

module.exports = insertionSort;
