# Day 6

## `super` keyword

It is a keyword which is used to represent parent class object.
  
- Used to refer parent class instance variable
- Used to refer parent class instance method
- Used to refer parent class instance constructor
- Can be passed as an argument in the method calling
- Can be passed as an argument in the constructor calling

### Example Usage of super keyword

```java
class Demo
{
  // instance variable
  int a=23,b=45;
  int c=a+b;
}
class Test extends Demo
{
  void multi(int a,int b)
  {
    int c=a*b;
    System.out.println("multiplication of number "+c);
    System.out.println("sum of number "+super.c);
  }
  public static void main(String[] args) {
    Test t=new Test();
    t.multi(10,20);
  }
}
```

```java
class Demo
{
  void add()
  {
  int a=23,b=45;
  int c=a+b;
  System.out.println(c);
  }
  void show()
  {
    System.out.println("hello");
  }
}
class Test extends Demo
{
  void multi(int a,int b)
  {
    super.add();
    super.show();
    int c=a*b;
    System.out.println("multiplication of number "+c);

  }
  public static void main(String[] args) {
    Test t=new Test();
    t.multi(10,20);
  }
}

```

## Polymorphism

Is a greek word  where poly means many and morphism means forms. When an action perfomed multiple operation in different ways is known as polymorphism.
  
There are two types of polymorphism :
  
1. `method overloading/ compile time polymorphism / early binding / static binding` :
  
     When a class having more than one method with same name but arguments must be different.

1. `method overriding/ runtime polymorphism / dynamic binding /  dynamic binding` :

      When parent class and child class having same method name but different logic.

> Note : Auto Incrementation in java
> `byte->short->char->int->float->long->double`

```java

// Example of method overloading

class Test
{
  void result(int a,int b)
  {
    int c=a+b;
    System.out.println(c);
  }
  void result(int a,float b)
  {
    float c=a*b;
    System.out.println(c);
  }
  void result(String name,int salary)
  {
    System.out.println(name+" "+salary);
  }
  public static void main(String[] args) {
    Test t=new Test();
    t.result(23,1.5f); 
    t.result(20,40);
    t.result("aman", 23000);
  }
}
```

```java

// Example of operator overloading 

class Test
{
  
  public static void main(String[] args) {
    String s1="100";
    String s2="200";
    String s3=s1+s2;
    System.out.println(s3);

    int a=12,b=34;
    int c=a+b;
    System.out.println(c);
  }
}

```

```java

// Example of run time polymorphism 

class Parent
{
  void method()
  {
    System.out.println("parent method called");
  }
}

public class Child extends Parent
{
  void method()
  {
    System.out.println("Child method called");
  }

  public static void main(String[] args) {
    Child c=new Child();
    c.method();

    Parent p= new Parent(); // static binding
    p.method();

    Parent p1= new Child();  // dynamic binding  or run time polymorphism
    p1.method();
  }
}

```

> Note : Parent class can hold the information of child class but child class
> can't hold the information of parent class is known as `dynamic binding`
