# Day 5

## More about `this` keyword

- It is used to refer current instance method
- It can be passed as an argument in the method calling
- Used to refer current class constructor
- Can be passed as an argument in the constructor calling

```java
class Test {
    void show() {
        System.out.println("hello");
        this.info("karan", 23000);
    }

    void info(String name, int salary) {
        System.out.println(name + " " + salary);
    }

    void value(int a) {
        this.show();
        System.out.println(a);
    }

    public static void main(String[] args) {
        Test t = new Test();
        t.value(11);
    }
}
```

```java

class Test
{
  Test()
  {
    this(10,20); // calling constructor 
    System.out.println("default const");
  }
  
  Test(int a)
  {
    System.out.println(a);
  }
  Test(int a,int b)
  {
    //this(111);
    int c=a+b;
    System.out.println(c);
    //this(101);
  }
  public static void main(String[] args) {
    Test t=new Test();

  }
}
```

## Inheritance

The process of aquiring properties(variable) and behavior(method) from
one class to another class is known as inheritance.

> Inheritance in programming is a mechanism that allows a class to inherit properties and behavior from another class.

- Also known as `IS-A relationship`
- With the help of `extends` keyword we can achieve tha concept of inheritance

```java
  class Parent {
     //properties
     // method
  }
  class Child extends Parent{
  }  
```

### There are five types of inheritance

1. `Single level inheritance` : When a class inherits the properties of another class is
       known as .............  

    ```java
        class A
        {

        }
        class B extends A
        {

        }
    ```

1. `Multi level inheritance` : When a class inherits the properties of another class but
     these class already inherited another class is known as ...........

    ```java
     class A
     {

     }
     class B extends A
     {

     }
     class C  extends B
     {

     }
    ```

1. `Hierarchical inheritance` : When a class inherited by more than one class is known ....

    ```java
        class A
        {

        }
        class B extends A
        {

        }
        class C extends A
        {

        }
    ```

1. `Multiple inheritance` : A class can't extends more than one class at a time so java
     doesn't support.

     ```java
     class A
     {

     }
     class B extends A
     {

     }
     class extends A,B
     {

     }
     ```

1. `Hybrid inheritance` : it is a combination of hierarchical and multiple inheritance so
     doesn't support

    ```java
       class A
     {

     }
     class B extends A
     {

     }
       class C  extends A
       {

       }
       class D extends B,C
       {

       }
    ```

### Examples

Single level

```java

// Single level

class Parent
{
  void msg() { 
    System.out.println("hello");
  }
  void value(int a)
  {
    System.out.println(a);
  }
}

class Child extends :Parent
{
  public static void main(String[] args) {
    Test t = new Test();

    // Calling methods of parent class
    t.msg();
    t.value(101);
  }
}

```

Multi-level

```java

// Multi level

class GrandParent 
{
  void msg()
  {
    System.out.println("hello");
  }
  
}
class Parent extends GrandParent
{
  void value(int a)
  {
    System.out.println(a);
  }
}

class Child extends Parent
{
  public static void main(String[] args) {
    Test t=new Test();

    // Calling GrandParent Class method 
    t.msg();

    // Calling Parent Class method
    t.value(101);
  }
}


```

Understanding concept of multi-level inheritance with example

```java
class Demo1
{
  void m1()
  {
    System.out.println("hello");
  }
  
}
class Demo2 extends Demo1
{
  void m2()
  {
    System.out.println("hi");
  }
}
class Test extends Demo1
{
  public static void main(String[] args) {
    Test t=new Test();
    t.m1();
    Demo2 d=new Demo2();
    d.m2();
  }
}
```

Mulitple inheritance  -> **_NOT SUPPORTED JUST FOR UNDERSTANDING_**

```java
class Demo1
{
  void m1()
  {
    System.out.println("hello");
  }
  
}
class Demo2 extends Demo1
{
  void m1()
  {
    System.out.println("hi");
  }
}

// multiple inheritance ( ERRONEOUS CODE )
class Test extends Demo2,Demo1
{
  void m2()
  {
    System.out.println("bye");
  }
  public static void main(String[] args) {
    Test t=new Test();
    t.m2();
    t.m1();
  }
}
```
