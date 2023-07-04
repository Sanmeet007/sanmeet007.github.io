# Day 4

## 3. Constructor

- It is used to initialize the state of an object. constructor call and executes automaticallyat the time of object creation.
- Class name and object name always same.

There are two types of constructor :

1. `default constructor` :- no argument
1. `parameterized constructor` :- with argument

> Note:- we can declared only one default constructor inside a class but we can declare multiple parameterized constructor but arguments must be different ithis is known as `constructor overloading`.

### Examples

```java
package basic;

public class Test
{
  //default const
  Test()
  {
    System.out.println("this is my default const");
  }
  //parameterized const
  Test(int a,int b)
  {
    int c=a+b;
    System.out.println(c);
  }
  Test(int id,String name)
  {
    System.out.println(id+" "+name);
  }
  public static void main(String[] args) {
    Test t=new Test();
    Test t1=new Test(10,20);
    Test t3=new Test(1,"aman");
  }
}

```

```java

package basic;
// instance method can access instance variable
public class Test
{
  // instance variable
  int a=10,b=20;
  
  //instance method
  void sum()
  {
    int c=a+b;
    System.out.println(c);
  }
  public static void main(String[] args) {
    Test t=new Test();
    t.sum();
  }
}
```

```java
package basic;
// instance method can access instance variable
public class Test
{
  // instance variable
  int a=10,b=20;
  
  //instance method
  void sum(int a,int b)   //local variable
  {
    int c=a+b;
    System.out.println(c);
    System.out.println(this.a+this.b);
  }
  public static void main(String[] args) {
    Test t=new Test();
    t.sum(30,40);
  }
}
```

### Q. What is the main purpose of constructor

The main purpose of constructor is used to initialize instance variable

## 4. instance block

It is a block which is depend object creation. if you are creating two object then instance block will be executes two times.

### Example

```java
package basic;

public class Test
{
  Test()
  {
    System.out.println("this defualt");
  }
  {
    // This is instance block.

    // Printed first then the above code is executed 
    System.out.println("this is my instance block");
  }

  public static void main(String[] args) {
    Test t = new Test(); 
  }
}
```

## 5. static block

It is a block which is executed before main method.

### Example

```java
package basic;

public class Emp
{
  Emp()
  {
    System.out.println("this defualt");
  }
  {
    System.out.println("this is my instance block");
  }
  Emp(int a)
  {
    System.out.println(a);
  }
  static
  {
    // This is satic block
    System.out.println("this is my static block");
  }
  public static void main(String[] args) {
    Emp e=new Emp();
    Emp e1=new Emp(111);
  }
}
```

## `this` keyword

When instance and local variable same then may be chance to create ambiguity problem so to resolve the problem using `this` keyword. `this` is a keyword which is used to refer current instance of class or object.

### Example

```java
package basic;

public class Emp
{
  //instance variable
  int id,salary;
  String name,post,address;
  static String cmp="TCS Noida";
  //parameterized const
  Emp(int id,String name,String post,int salary,String address)
  {
    this.id=id;
    this.name=name;
    this.post=post;
    this.salary=salary;
    this.address=address;
  }
  //instance method
  void show()
  {
    System.out.println(id+" "+name+" "+post+" "+salary+" "+address+" "+cmp);
  }
  public static void main(String[] args) {
    Emp e1=new Emp(1,"sahil","developer",23000,"noida");
    Emp e2=new Emp(2,"karan","programmer",45000,"delhi");
    e1.show();
    e2.show();
  }
}
```
