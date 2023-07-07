# Day 7

## Abstraction

Hiding the complexity and giving the functionality is known as Abstraction. Ex:- How does bike start.
  
There are two ways to achieve the concept of abstraction :
  
  1. abstract class
  1. interface

### `abstract class`

* A class which are decided with abstract keyword is known as abstract class.
* We can't create object of abstract class
* Contains may or may not abstract method
* Abstract method is a method which can't have any body.

Example :

```java

class Ab{
    abstract void show();
}

class A extends Ab{
    void show(){ /* body */ }
}
```

* if we declare a method with abstract then class must be abstract.
* abstract class can implement using inheritance.
* an abstract class extends another abstract class
* we can declared constructor of abstract class

> **_abstract class_** doesn't support multiple inheritance but **_interface does_**
  
#### Examples

```java
abstract class demo
{
  abstract void m1();
  abstract void m2(int id,String name);
}
class Test extends demo
{
  void m1()
  {
    System.out.println("hello");
  }
  void m2(int id,String name)
  {
    System.out.println(id+" "+name);
  }
  public static void main(String[] args) {
    Test t=new Test();
    t.m1();
    t.m2(11,"karan");
    //demo d=new demo(); we can't create object of abstract class
  }
}

abstract class demo1
{
  abstract void m1();

}
abstract class demo2 extends demo1
{
  abstract void m2(int id,String name);
}
class Test extends demo2
{
  void m1()
  {
    System.out.println("hello");
  }
  void m2(int id,String name)
  {
    System.out.println(id+" "+name);
  }
  public static void main(String[] args) {
    Test t=new Test();
    t.m1();
    t.m2(11,"karan");
    //demo d=new demo(); we can't create object of abstract class
  }
}

abstract class demo
{
  demo()
  {
    System.out.println("demo wala const");
  }
  demo(int a)
  {
    System.out.println(a);
  }
}
class Test extends demo
{
  Test()
  {
    System.out.println("test wala const");
  }
  Test(int a,int b)
  {
    super(111);
    int c=a+b;
    System.out.println(c);
  }
  public static void main(String[] args) {
    Test t=new Test();
    Test t1=new Test(10,20);

  }
}

```

### `interface`

It is just like blue print of a class

* We can't create object of interface
* Contains only abstract method
* abstract method's are by default public abstract
* with the help `implements` keyword we can achieve the concept of interface
  
* An interface extends another interface
* Class implements an interface
* A class can implement more than one interface( support multiple inheritance)

#### Examples

```java
interface test1
{
  void m1();
  public abstract void m2();
}
class Test implements test1
{
  public void m1()
  {
    System.out.println("hello");
  }
  public void m2()
  {
    System.out.println("hi");
  }
  public static void main(String[] args) {
    Test t=new Test();
    t.m1();
    t.m2();
  }
}

interface test1
{
  void m1();
}
interface test2 extends test1
{
  void m2();
}
class Test implements test2
{
  public void m1()
  {
    System.out.println("hello");
  }
  public void m2()
  {
    System.out.println("hi");
  }
  public static void main(String[] args) {
    Test t=new Test();
    t.m1();
    t.m2();
  }
}

interface test1
{
  void m1();
}
interface test2
{
  void m2();
}
class Test implements test1,test2
{
  public void m1()
  {
    System.out.println("hello");
  }
  public void m2()
  {
    System.out.println("hi");
  }
  public static void main(String[] args) {
    Test t=new Test();
    t.m1();
    t.m2();
  }
}
```

---

## Encapsulation ( setters and getters)

The process of binding variable and their corrosponding method are encapsulated into a
   single unit is knownas Encapsulation.

Rules :

   1. all data member(variable) should be private
   1. apply getter and setter with variables

### Example

```java
class Test
{
  private int pass;
  private String name;
  
  public int getPass() {
    return pass;
  }
  public void setPass(int pass) {
    this.pass = pass;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  
  public static void main(String[] args) {
    Test t=new Test();
    t.setPass(123);
    t.setName("sahil");

    System.out.println("name is "+t.getName());
    System.out.println("password is "+t.getPass());
  }
}
```
