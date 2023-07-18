# Day 12

## File Handling

Java I/O stream is the flow of data that you can either read from, or you can write to.
It is used to perform read and write operations in file permanently. Java uses streams
to perform these tasks.

Java I/O stream is also called File Handling, or File I/O. It is available in java.io package.

## Stream

A stream can be defined as a sequence of data. There are two kinds of Streams −

Types of stream :

1. `InPutStream` : The InputStream is used to read data from a source.
1. `OutPutStream` : The OutputStream is used for writing data to a destination.

> `SequenceInputStream` class is used to read data from multiple streams.
> It reads data sequentially (one by one).

```md
    "SequenceInputStream" takes two or more InputStream objects as sources. It reads from 
    one source after the other in the given order. When it completes reading from the 
    first InputStream, it automatically starts reading from the second. This process 
    continues until it finishes reading from all the source streams.
```

Examples :

```java
import java.io.*;
public class FileTest
{
  public static void main(String[] args) {
    try {
      //creating new file
      File f = new File("D://file1.txt");
    
      // returns true if file is created successfully or false   
      if(f.createNewFile())
      {
        System.out.println("File Name is "+f.getName());
      }
      else
      {
        System.out.println("Already exits");
      }
    } catch(Exception e) {
      e.printStackTrace();
    }
  }
}
```

```java

import java.io.*;
public class FileTest
{
  public static void main(String[] args) {
    try
    {
      FileOutputStream f=new FileOutputStream("D://file1.txt");
      String s="Welcome to techlive solution";
      byte[] b=s.getBytes();
      f.write(b);
      f.close();
      System.out.println("File Write Done.....");
    }
    catch(Exception e)
    {
      e.printStackTrace();
    }
  }
}
```

```java

import java.io.*;
public class FileTest
{
  public static void main(String[] args) {
    try
    {
      FileInputStream f=new FileInputStream("D://file1.txt");
      int i=0;
      while((i=f.read())!=-1)
      {
        System.out.print((char)i);
      }
    }
    catch(Exception e)
    {
      e.printStackTrace();
    }
  }
}

```

```java

import java.io.*;
public class FileTest
{
  public static void main(String[] args) {
    try
    {
      FileInputStream f1=new FileInputStream("D://file1.txt");
      FileInputStream f2=new FileInputStream("D://file2.txt");

      
      // stores different streams in a file 
      SequenceInputStream s=new SequenceInputStream(f1,f2);

      int i = 0;
      while((i = s.read())!= -1)
      {
        System.out.print((char)i);
      }
    }
    catch(Exception e)
    {
      e.printStackTrace();
    }
  }
}

```

```java
import java.io.*;
public class FileTest
{
  public static void main(String[] args) {
    try
    {
      FileInputStream f1=new FileInputStream("D://file1.txt");
      FileInputStream f2=new FileInputStream("D://file2.txt");
      SequenceInputStream s=new SequenceInputStream(f1,f2);
      FileOutputStream f=new FileOutputStream("E://file.txt");

      int i=0;
      while((i=s.read())!=-1)
      {
        f.write(i);
        System.out.println("done");
      }
    }
    catch(Exception e)
    {
      e.printStackTrace();
    }
  }
}
```
