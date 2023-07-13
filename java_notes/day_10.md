# Day 10

## EXCEPTION

Exception is an abnormal condition which occurs runtime at the time of program execution.

There are Two types of exception :

1. `checked` exception : checked exception are the exception which are checked by compiler.
(compile time)
1. `unchecked` exception : unchecked exception are the exception which are not checked by the
 compiler.(at Runtime)

### Checked Exception

1. `FileNotFoundException` will be raiesd when given file name is not avialable
  at the specific location.

1. `ClassNotFoundException` will be raised when given class name is not avialable
  at the time of running the program or executes the program.
  
1. `IOException` will be raiesd whenever problem occured while writting and
  reading the data in the file.
    1. when you try to read data but file is currupted.
    1. when you try to write in the file but file is read only.

1. `InterruptedException` will be raiesd whenever one thread is distrub to another
  thread.

### Unchecked Exception

1. `ArithmeticException`  will be raised when number is divisible by zero
1. StringIndexOutOfBoundsException will be raiesd when the given index value is
  out of range.
  
1. `NumberFormatException` will be raised when you try to store input value into
  unauthorized datatype.  

1. `NullPointerException` will be raised when you try to access object but object
  reference is equal to null.
  
1. `ArrayIndexOutOfBoundsException` will be raised if you are trying  to access
  element with an illegal index.

## Keywords used in Exception

There are five keywords used in exception like:

 1. **try**
 1. **catch**
 1. **throw**
 1. **throws**
 1. **finally**

### try

* try is a keyword
* To maintain risky code
* try block is always associated with catch block
* Each and every try block must contains atleast one catch block

#### Syntax

```java
  try {
   // risky code
  } catch {
   //handling exception
  }
```

### Catch

* catch is a keyword
* To maintain handling code
* we can use multiple catch block inside single try block.

### Syntax

```java
  try{
   // risky code
  } catch (Exeception ... ){
   //handling code
  } catch (Exeception ... ){

  }

  // or
  
  try {
   try {

   } catch(Exception e) {

   }
  } catch(Exception e) {

  }
```

### throws

* Throws keyword is used to declared exception which is used with method signature

* we can declared multiple throws exception

```java
  void show() throws ArithmeticException ...  
```

### throw

* throw is a keyword which is used to throw an exception explicitly.it is also
   known as user defined exception.

* Sometimes we can create exception object explicitly and we can hand over to
   the jvm manually by using throw keyword.

Syntax:

```java
   throw new ArithmeticException("hello....user defined exception");
```

* throw exception always declared inside the method

```java
   void msg() {
    throw new ArithmeticException("hello....user defined exception");
   }
```

> After throw exception statement we can not take any statement directly  otherwise we will get compile time error.

### finally

* finally block is an optional block.it is always executed irrespective of try and catch
   block.
* it is used to provide clean up code
* it is not possible to write finally alone

```java
    try{

    }finally{ 
        // code ... 
    }
```

## Code Examples

```java
public class Ex1 
{
  public static void main(String[] args) {
    try
    {
      int a=12,b=0;
      int c=a/b;
      System.out.println(c);
    }
    catch(Exception e)
    {
      System.out.println("Exception Generates");
    }
    finally 
    {
      System.out.println("always executes");
    }
  }
}
```

```java

public class Ex1 
{
  public static void main(String[] args) {
    try
    {
      String s="think";
      System.out.println(s.toUpperCase());
      System.out.println(s.length());
      System.out.println(s.charAt(2));
      System.out.println(s.charAt(9));
      System.out.println(s.toUpperCase());
      System.out.println(s.length());
      System.out.println(s.charAt(2));
    }
    catch(Exception e)
    {
      System.out.println("Exception Generates");
    }
    finally 
    {
      System.out.println("always executes");
    }
  }
}
```

```java
public class Ex1 
{
  public static void main(String[] args) {
    try
    {
      String s1="100";
      String s2="200";
      String s=s1+s2;
      System.out.println(s);
      
      Integer i=Integer.parseInt(s1);
      Integer j=Integer.parseInt(s2);
      
      int k=i+j;
      System.out.println(k);
      
      String ss="hello";
      Integer st=Integer.parseInt(ss);
      System.out.println(st);
    }
    catch(Exception e)
    {
      System.out.println("Exception Generates");
    }
    
  }
}

```
