# Day 3

## Elements of class

class contains five elements

   1. variable
   2. methods
   3. constructor
   4. instance block
   5. static block

### 1. Variable

It is a memory location which is used to store data.

There are three types of variable :

   1. local variable
   2. instance variable
   3. static variable

#### i. local variable

A variable which are declared within the method,block or constructor is known as
   local variable. we can access local variable direct.

#### ii. instance variable

A variable which are decided within the class but outside the method is known as instance variable. **_we can access instance variable by using object reference_**.

#### iii. static variable

A variable which are decided with static keyword. it is also known as `class level variable`.

There are three ways to access static variable :

    a. direct
    b. using object reference
    c. using class name

---

#### Examples

``` java
package basic;

public class Test
{
  //instance variable
  int a=12,b=56;
  int c=a*b;
  
  public static void main(String[] args) {

    //create object 
    Test t=new Test();
    
    //we can access instance variable by using object reference t 
    
    System.out.println(t.c);
  }
}

```

```java

package basic;

public class Test
{
  //static variable
  static int a=12,b=56;
  static int c=a*b;
  
  public static void main(String[] args) {

    //create object 
    Test t=new Test();
    
    //2. we can access static variable by using object reference t 
    
    System.out.println(t.c);
    
    // 1 direct 
    System.out.println(c);
    
    // 3 class name 
    System.out.println(Test.c);
  }
}

```

```java
package basic;
//diff b/w local ,instance and static variable
public class Test
{
  int a;
  static int b;
  
  public static void main(String[] args) {

    int c;
    //System.out.println(c);
    
    Test t = new Test();
    System.out.println(t.a);
    System.out.println(t.b);
  }
}
/*
JVM will provide by default value 0 for instance and static but not for local
*/
```

```java

package basic;
//diff b/w instance and static variable
public class Test
{
  int a = 10;
  static int b = 20;
  
  public static void main(String[] args) {
    Test t = new Test();
    System.out.println(t.a);
    System.out.println(t.b);

    //here changed value 
    t.a = 11;
    t.b = 22;
    
    System.out.println(t.a);
    System.out.println(t.b);
    
    //creating another object 
    Test t1 = new Test();
    System.out.println(t1.a);  //11   //10
    System.out.println(t1.b);  //22   //22
  }
}

```

### 2. Methods

Used to write business logic(own logic)

There are two types of method :

1. `instance method` :- we can access instance method by using object reference.
1. `static method` : It is a method that belongs to the class itself rather than an instance of the class. It can be called directly on the class without creating an object of that class.

    There are three ways to access :
    1. direct
    1. using object
    1. class name

> Note : `instance method` can acess instance variable & `static method` can access static variable.
>  `instance method` can acess static variable   & `static method` can access instance variable.

---

Example of methods :

```java
package basic;

public class Test
{
  void show()
  {
    System.out.println("hello");
  }
  void add(int a,int b)
  {
    int c=a+b;
    System.out.println(c);
  }
  public static void main(String[] args) {

    Test t=new Test();
    t.show();
    t.add(23, 40);

  }
}
```

```java
package basic;

public class Test
{
  static void show()
  {
    System.out.println("hello");
  }
  
  public static void main(String[] args) {

    Test t=new Test();
    t.show();
    
    //direct 
    show();
    
    //class name
    Test.show();

  }
}

```

```java
package basic;

public class Test
{
  void m1()
  {
    m3();
    System.out.println("hello");
  }
  void m2()
  {
    m4();
    System.out.println("hi");
  }
  void m3()
  {
    System.out.println("bye");
  }
  void m4()
  {
    System.out.println("tye");
    m1();
  }
  public static void main(String[] args) {

    Test t=new Test();
    t.m2();

  }
}
```
