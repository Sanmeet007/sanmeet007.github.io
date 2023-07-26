# Day 14

## Collection API

### ArrayList:-

   1. ArrayList supports  dynamic array that can be grow as needed.it can
   dynamically  increase and decrease the size.
   1. Duplicate objects are allowed.
   1. Null insertion is possible.
   1. Heterogeneous objects are allowed.

### LinkedList:-

   1. it uses doubly linked list to store the element in collection
   1. Duplicate objects are allowed.
   1. Null insertion is possible.
   1. Heterogeneous objects are allowed.

### Vector:-

   1. Introduced in 1.0 version  legacy classes.
   1. Duplicate objects are allowed.
   1. Null insertion is possible.
   1. Heterogeneous objects are allowed.

### Stack:-

   1. It is a child class of vector  
   1. Introduce in 1.0 version legacy class
   1. It is designed for LIFO(last in first out )

#### Properties of stack

- `push()` :  for add
- `pop()` :  for remove
- `peek()` :  for get

### PriorityQueue:-

   A priority queue in java is special type of queue where in all the elements are ordered as per
   their natural order but front of the priority queue contains least element according to the
   speciﬁed ordering.it doesn’t order the element in FIFO manner.

### HashSet:-

   1. Introduced in 1.2 version
   2. Duplicate objects are not allowed if we are trying to insert duplicate values then
      we won’t get any compilation errors an won’t get any Execution errors simply add method return false.
   3. Null insertion is possible
   4. Heterogeneous objects are allowed
   5. HashSet doesn’t maintain any order of element.
   6. HashSet contains only unique elements.

### LinkedHashSet:-

   1.LinkedHashSet maintains a linked list of entries in the set.
   2. it maintain the insertion order.
   3. it contains only unique elements.

### TreeSet:-

   1. it stores the elements in ascending order.
   2. it uses a tree structure to store the elements.
   3. it contains only unique elements.
   4. it access and retrieve time are fast.

### Map interface

It is an interface which is used to retrieve or insert object in the form of key and value format.

Key must be unique means we can not add duplicate element in the collection but value can be dulplicate.
