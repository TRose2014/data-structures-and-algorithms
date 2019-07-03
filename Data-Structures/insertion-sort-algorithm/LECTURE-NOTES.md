# Lecture Notes: Insertion Sort

## Description:
An algorithm that compares the key element to previous elements in the array. If the previous elements is greater than the key element, then that previous element is moved to the next position.

## Is it more efficient than others? How does it attack the problem differently?

Insertion sort is the simplest and efficient sorting algorithm for a small array


## Learning Objectives
The baiscs of Insertion sort 

# Lecture Flow
Diagram<br />
Algorithm<br />
Pseudocode<br />
Readings and References

# Diagram
![Diagram](https://he-s3.s3.amazonaws.com/media/uploads/46bfac9.png)

# Algorithm
Create a function called InsertionSort</br>
In a for loop set i equal to 0 and have i be less than array.length</br>
Assume the first item is sorted</br>
Find th next value to compare the sorted value</br>
Move over any necessary elements to make space for value being added</br>
Insert value into sorted, rinse and repease</br>


# Pseudocode
```
InsertionSort(int[] arr)

    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```

# Readings and References
Watch</br>
[Video](https://youtu.be/OGzPmgsI-pQ)

Read</br>
[Free Code Camp](https://guide.freecodecamp.org/algorithms/sorting-algorithms/insertion-sort/)</br>
[Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort)

Bookmark</br>
[Website](https://medium.com/basecs/inching-towards-insertion-sort-9799274430da)