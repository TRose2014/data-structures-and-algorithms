# Merge Sort
Merge sort first divides the array into equal halves and then combines them in a sorted manner.

## Is it more efficient than others? How does it attack the problem differently?
Merge sort is pretty efficient compared to other sorting techniques. Worst case scenrio, this algorithm has a O(n) complexity

# Learning Objectives
The baiscs of Merge sort

# Lecture Flow
Diagram
Algorithm
Pseudocode
Readings and References


Diagram
![Diagram](https://s3-us-west-2.amazonaws.com/tutorials-image/merge+sort+working.png)

## Algorithm
* Create a function called Mergesort
* Check to see if an array was passed in
* Declare variable called mid and assign it to n/2
* Declare variable called b and assign it to 0...mid
* Declare variable called c and assign it to mid...n

* Create a function called merge
* Declare variable called i and assign it to 0
* Declare variable called j and assign it to 0
* Declare variable called k and assign it to 0
* Iterate while i < b and j < c
* If b at index i is less than or equal to c at index j
   * assign a at index k to b at index i
   * assign i to i + 1
   * Else, assign a at index k to c at index j 
      * assign j to j + 1
* assign k to k + 1
* if i equals the length of b
  * add remaining items in array c to array a
  * else, add remaining items in array b to array a
* return a

Pseudocode

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if arr.length > 1
      DECLARE mid <-- n/2
      DECLARE b <-- arr[0...mid]
      DECLARE c <-- arr[mid...n]
      // break down the left side
      Mergesort(b)
      // break down the right side
      Mergesort(c)
      // merge the left and the right side together
      Merge(b, c, arr)

ALGORITHM Merge(b, c, a)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < b && j < c
        if b[i] <= c[j]
            a[k] <-- b[i]
            i <-- i + 1
        else
            a[k] = c[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = b.length
       add remaining items in array c to array a
    else
       add remaining items in array b to array a
       
    return a
  ```

Readings and References


[Video](https://www.youtube.com/watch?v=KF2j-9iSf4Q)

[Interview Bit](https://www.interviewbit.com/tutorial/merge-sort-algorithm/)</br>
[Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/overview-of-merge-sort)</br>

Bookmark</br>
[Website](https://www.interviewcake.com/concept/java/merge-sort)