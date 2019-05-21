function insertShiftArray(arr, element){
  let newArray = [];
  let midpoint = arr.length/2;

  if(arr.length % 2 === 1){
    midpoint = midpoint + .5;
  }

  for(let i = 0; i < midpoint; i++){
    newArray[i] = arr[i];
  }

  newArray[newArray.length] = element;

  for(let i = midpoint; i < arr.length; i++){

    newArray[i+1] = arr[i];

  }
  return newArray;
}

console.log(insertShiftArray([4,8,15,23,42], 16));
