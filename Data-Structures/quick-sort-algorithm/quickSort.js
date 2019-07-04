'use strict';

let quickSort = (arr, left, right) => {
  if (left < right) {
    let position = partition(arr, left, right);

    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
};



let partition = (arr, left, right) => {
  let pivot = arr[right];
  let l = left - 1;

  for (let i = left; i <= right - 1; i++) {
    if (arr[i] <= pivot) {
      l++;

      swap(arr, i, l);
    }
  }

  swap(arr, right, l + 1);
  return (l + 1);
};

let swap = (arr, i, left) => {
  let temp = arr[i];
  arr[i] = arr[left];
  arr[left] = temp;
};

module.exports = quickSort;


