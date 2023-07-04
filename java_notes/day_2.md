# Day 2

## Scanner

It is a class present `java.util` package which is used to take dynamic input from user

keyword   => creating object of Scanner class

```java
 Scanner s=new Scanner(System.in);
```

Methods :

1. to read integer value  : `s.nextInt()`
1. to read float value    : `s.nextFloat()`
1. to read String value   : `s.next()`

Example code :

```java

package basic;
import java.util;

public class App (){

    public static main(String[] args){
        // Making instance of scanner class
        Scanner scanner = new Scanner();

        int input = 0;
        System.out.println("Enter a number");
       
        
         // Taking integer type input
        input = scanner.nextInt();

        // Used `+` concatinates string with number or string type
        System.out.println("Entered number is : "+  input);

        // same for float         
        
    }
}
```

> Note : Be careful with string input as `.next()` takes values with no whitespace and `.nextLine()` has weird behaviour.

## varargs

Take variable number of arguments. The `varargs` is just a variable to store the values.

Example :

```java
public class Example(){
    public static void main(String... varargs){
        // here varargs can take multiple values ... similar to array of string as argurments
    }
}
```

## Interview Questions

### Q. Why main() method declared as public  

To call main() method by JVM from anywhere so main is declared as the public.

### Q. Why main() method declared as static  

To call main() method by JVM without creating any object so.....

### Q. Why main() method declared as void

It doesn't return anything. Hence `void`

    Main function arguments : 

    - `String[] args` :- it will take command line argument
    - `String` :- it wil take any type of data
    - `args` :- is a variable of String type

## Object oriented programming in JAVA

There are six oop's concept in java  

1. object
2. class
3. inheritance
4. polymorphism
5. abstraction
6. encapsulation

### 1. `object`

It is a real world entity which consists of state and behavior.Example. Pen is an object where name and color represent value of an object (state) , behavior represent functionality of an object for instance Writing something with pen.
**Object is memory location which is used to store value temporary.**
  
> object contains `properties(variable)` and `functionality(function/method)`

```java

class Person{
    String name , email; // props
    int roll; // prop

    void eat(); // behaviour
    void dance(); // behaviour
}
```

Here `eat()` and `dance()` are methods i.e. behaviour and name roll , name , email are properties or state of a person object.

                        constructor is used for intialization of an object
                            |
                            |
                refer 123   |    123
                    |       |   / 
            Student s = new Student();
                    | \
                    |  \
                    |   \
                   /     --------------------------\
                  /                                 \    
                                                     ----------                
        reference variable is a variable which                  \
        is used to refer an object                               \
                                                            +----------+
                                                            |  object  |
                                                            +----------+
                                                            address 123

        new is a keyword which is used to create object                                                         

### 2. `class`

It is a logical entity or blue print/template but doesn't exits physically.

Let us consider `Student` a class . By definition class doesn't exists physically so as `Student` only there instances exists (object). Eg. In a classroom we have different students but a student with particular roll no. is object or instance.

```java
class Student {       
    // logic implement  
}   
```

Same goes for `Flower` , flower can be  rose , lotus which are object of class `Flower`,

#### Important

    - class is a group of objects
    - class name and object name are always same
    - an object is an instance of class    clas

Example :

```java
      Student s = new Student();   
```
