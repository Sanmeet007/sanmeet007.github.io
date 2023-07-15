# Day 11

## Hands on Exception handling

Examples to demonstrate exceptions

```java

public class Ex1
{
  public static void main(String[] args) {
    try
    {
      String s="";
      System.out.println(s.length());
      String s1=null;
      System.out.println(s1.length());
    }
    catch(Exception e)
    {
      System.out.println("Exception Generates");
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
      String s="";
      System.out.println(s.length());
      try
      {
        int a=12,b=4;
        int c=a/b;
        System.out.println(c);
        try
        {
          int ar[]= {1,2,3,4,5,6};
          System.out.println(ar[3]);
          System.out.println(ar[9]);
        }
        catch(Exception e)
        {
          System.out.println("Exception Generates");
        }
      }
      catch(Exception e)
      {
        System.out.println("Exception Generates");
      }
    }
    catch(Exception e)
    {
      System.out.println("Exception Generates");
    }

  }
}


```

## Exception Method

   1. getMessage()
   2. toString()
   3. printStackTrace();

### Examples

```java
public class Ex1
{
  public static void main(String[] args) {
    try
    {
      String s="think";
      System.out.println(s.charAt(9));

    }
    catch(Exception e)
    {
      System.out.println(e.getMessage());
      System.out.println(e.toString());
      e.printStackTrace();
    }

  }
}

```

```java

import java.util.*;
public class Ex1
{
  void vote()
  {
    Scanner s=new Scanner(System.in);
    System.out.println("Enter your age");
    int age=s.nextInt();

    if(age>=18)
    {
      System.out.println("you are valid user");
    }
    else 
    {
      throw new NullPointerException("you are not eligible for vote");
    }
  }
  public static void main(String[] args) {

    Ex1 e=new Ex1();
    e.vote();
  }
}
```
