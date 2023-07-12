# Day 9

## String methods

Some string methods in java.

1. `String.length()` : Used to find length.
1. `String.concat()` : Concats or append string
1. `String.toUpperCase()` : Returns new string with uppercase.
1. `String.toLowerCase()` : Returns new string with lowercase.
charAt() is used to find character
1. `String.substring()` :  Used to find multiple character.
1. `String.replace()` :  Used to replace word.
1. `String.indexOf()` :  Used to find word index.
1. `String.startsWith()` & `String.endsWith()` : Used to known first and last word (Returns boolean value).

```java

public class Main {
  public static void main(String[] args) {
    String s = "Hello";
    System.out.println(s);
    
    //length() 
    System.out.println(s.length());
    
    //concat() 
    s.concat("World");
    System.out.println(s);
    
    //toUpperCase() and toLowerCase()
    System.out.println(s.toUpperCase());
    System.out.println(s.toLowerCase());
    
    //charAt() is used to find character
    System.out.println(s.charAt(0));
    System.out.println(s.charAt(2));
    System.out.println(s.charAt(3));
    
    //substring() 
    System.out.println(s.substring(2,4));
    
    //replace() 
    System.out.println(s.replace("H","Hi H"));
    
    
    //indexOf() is used to find word index
    System.out.println(s.indexOf("H"));
    
    //startsWith() and endsWith() is used to known first and last word
    System.out.println(s.startsWith("H"));
    System.out.println(s.endsWith("l"));
  }}
  ```

### String Comparision

There are three ways to comapre the String

1. `equals()`  : It will check content of String
1. `==`: It will check reference of string as well content
1. `comapreTo()` : Compares 2 strings.

    ```java
            String s2 = "think";
            String s3 = new String("think");
            String s4 = "think";
    ```

    1. if s2=s3 or s4 then return 0
    1. if s2>s3 or s4 then return +ve value with increment
    1. if s2<s3 or s4 then return -ve value with decrement

```java
public class Main{

    public static void main(String[] args){
        String s2 = "think";
        String s3 = new String("think");
        String s4 = "think";
        
        System.out.println(s2.equals(s3));
        System.out.println(s2.equals(s4));
        
        System.out.println(s2 == s3);
        System.out.println(s2 == s4);
        
        System.out.println(s2.compareTo(s3));
        
    }
}

```

### `StringBuffer` & `StringBuilder`

1. **StringBuffer** : Mutable java string class i.e content will be changed.
1. **StringBuilder** : Same as StringBuffer but value is not intialzed at start.

Some methods of _StringBuffer_ and _StringBuilder_ :

1. `append()` : Used to add content .
1. `insert()`  : Used to add content at particular index.
1. `deleteCharAt()`  : Used to delete character.
1. `delete()`  : Used to delete multiple character.
1. `reverse()` : Reverses the string.

```java

public class Main{
    
    public void main(String[] args) {

        // ? StringBuffer
        StringBuffer sb = new StringBuffer("Java");
        System.out.println(sb);
        
        //append() 
        sb.append("is a High level Programming language");
        System.out.println(sb);
        
        //insert() 
        System.out.println(sb.insert(6," and php"));

        //deleteCharAt()
        System.out.println(sb.deleteCharAt(2));
        
        //delete() 
        System.out.println(sb.delete(1, 2));
        
        // reverse()
        System.out.println(sb.reverse());

        // ? StringBuilder

        
        StringBuilder sd = new StringBuilder();
        
        sd.append("Java is a high level programming language");
        System.out.println(sd);
        sd.append(" and supports object oriented programming.");
        System.out.println(sd);
        System.out.println(sd.insert(6," and php"));
        System.out.println(sd.deleteCharAt(2));
        System.out.println(sd.reverse());
  }
}
```

> `StringBuffer` & `StringBuilder` are almost same only difference is using builder we can't instantiate with value.

## Package

1. Contains group of related classes and interfaces.
1. It is an encapsulation mechanism it is binding the related classes
   and interfaces.
1. We can declare a package with the help of package keyword.

> Similar to folder containg related files

Syntax:

```java
package my_package;
```

The packages are divided into two types :

1. `Predefined` packages
2. `User defined` packages  

### Predefined packages

The java predefined packages are introduced by sun peoples these  packages contains predefined classes and interfaces.  

Ex:- java.lang , java.io , java.awt , java.util , java.net ..etc

### User defined packages

1. The packages which are declared by the user are called user defined
   packages.  
1. In the single source file it is possible to take the only one package.
   If we are trying to take two packages at that situation the compiler
   raise a compilation error.
