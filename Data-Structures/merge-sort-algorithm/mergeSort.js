// 'use strict';

// function mergeSort(arr){
//   let n = arr.length;

//   if(arr.length > 1){
//     let mid = n/2;
//     let b = arr[0];
//     let c = arr[mid + 1];
//   }
// }

// // ALGORITHM Mergesort(arr)
// //     DECLARE n <-- arr.length
           
// //     if arr.length > 1
// //       DECLARE mid <-- n/2
// //       DECLARE b <-- arr[0...mid]
// //       DECLARE c <-- arr[mid...n]
// //       // break down the left side
// //       Mergesort(b)
// //       // break down the right side
// //       Mergesort(c)
// //       // merge the left and the right side together
// //       Merge(b, c, arr)


// function merge(b, c, a){

//   let i = 0;
//   let j = 0;
//   let k = 0;

//   while(i < b && j < c){
//     if(b[i] <= c[j]){
//       a[k] = b[i];
//       i = i + 1;
//     }else{
//       a[k] = c[j];
//       j = j + 1;
//     }

//     k = k + 1;
//   }

//   if(i === b.length){
//     c.push(a);
//   }else{
//     b.push(a);
//   }
//   return a;
// }

// // ALGORITHM Merge(b, c, a)
// //     DECLARE i <-- 0
// //     DECLARE j <-- 0
// //     DECLARE k <-- 0

// //     while i < b && j < c
// //         if b[i] <= c[j]
// //             a[k] <-- b[i]
// //             i <-- i + 1
// //         else
// //             a[k] = c[j]
// //             j <-- j + 1
            
// //         k <-- k + 1

// //     if i = b.length
// //        add remaining items in array c to array a
// //     else
// //        add remaining items in array b to array a
       
// //     return a