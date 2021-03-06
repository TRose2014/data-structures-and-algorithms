# Lecture Notes: QuickSort

## Description:
 QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.


## Is it more efficient than others? How does it attack the problem differently?

QuickSort at its worst case can have a complexity of O(n2), making it more than normal sorting algorithms. Yet, in practice QuickSort is faster because its inner loop can be efficiently implemented on most architectures, and in most real-world data. QuickSort can be implemented in different ways by changing the choice of pivot, so that the worst case rarely occurs for a given type of data. However, merge sort is generally considered better when data is huge and stored in external storage.

## Learning Objectives
The baiscs of Quick Sort 

# Lecture Flow
Diagram<br />
Algorithm<br />
Pseudocode<br />
Readings and References

# Diagram
![Diagram](https://qnaplus.com/wp-content/uploads/2017/05/quick_sort.png)

# Algorithm
* Select an element from the array as pivot.
* Partition the array. One partition will contain all the elements that are less than the pivot. 
* Another partition will contain all elements that are greater than the pivot.
* Apply this procedure recursively with these two partitions.


# Pseudocode
```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp

```

# Readings and References
Watch</br>
[Video](https://youtu.be/V6pF0Lr5Ykc)

Read</br>
[Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/quick_sort_algorithm.htm)</br>
[Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)

Bookmark</br>
[Website](https://www.geeksforgeeks.org/quick-sort/)