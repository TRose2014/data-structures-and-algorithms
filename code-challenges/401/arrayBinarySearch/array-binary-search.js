function binarySearch(sortedArr, target){
  let left = 0;
  let right = sortedArr.length - 1;
  while(left <= right){
    let mid = Math.floor((left+right) / 2);

    if (sortedArr[mid] < target){
      left = mid + 1;
    }else if(sortedArr[mid] > target){
      right = mid -1;
    }else{
      return mid;
    }
  }
  return -1;
}
console.log(binarySearch([4,8,15,16,23,42], 15));
console.log(binarySearch([11,22,33,44,55,66,77], 90));
