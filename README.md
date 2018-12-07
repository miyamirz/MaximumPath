# MaximumPath
Finds out the maximum path length of NxN matrix





Implementation:
1.An array containing arrays as its elements is feeded as input to the program.
2.A sideloaded matrix of same type is initialized to store the visited elements longest paths.
3.Each element can atmost have four directions to visit the adjacent nodes.For an element at position(I,j) , the possible four directions are (I,j+1 , I,j-1 , i+1,j , i-1,j).
4.Path visited by each element is stored in pathArr. The elements in the Maximum longest path are displayed.


The time complexity of the below problem is O(n2).
