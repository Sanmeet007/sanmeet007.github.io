# Day 15

## JDBC

### How to connect database

#### Load The Driver

```java
    Class.forName("com.mysql.jdbc.Driver");
```
  
* `Class` is a also a predefined class
* `forName()` is a method of Driver class
* `com.mysql.jdbc.Dtiver` is a driver implementation path
* `Driver` is predefined class
  
### Establishing Connection

```java
    Connection conn = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/databasename",
        "root",
        "password"
    );
```

* `Connection` is predefined interface
* `DriverManager` is predefined class
* `getConnection()` is method of Connection interface
* `JDBC` is API(Application Programming Interface) is a set of predefined classes and interface which is used to performed some operation like insert,select,update etc......

### Create Statement

```java
    Statement st = conn.createStatement();
    //            OR
    PreparedStatement p = conn.prepareStatement();
```

* if you want insert image or file in database then must be used PreparedStatement
  
### Execute query

* For `insert/update/delete`
  
```java
     int i = p.executeUpdate();
```  

* For `select/get`

```java
     ResultSet r = p.executeQuery();
```

### Close connection

```java
    conn.close();
```

## Examples

```java

import java.sql.*;
public class Insert
{
 public static void main(String[] args)throws Exception
 {
  Class.forName("com.mysql.jdbc.Driver");
  Connection cn=DriverManager.getConnection("jdbc:mysql://localhost:3307/mycgc","root","root");
  String s="insert into student values(?,?,?,?,?)"; // ? represent number of columns
  
  PreparedStatement p=cn.prepareStatement(s);
  
  p.setString(1, "4");
  p.setString(2, "manoj");
  p.setString(3, "mern");
  p.setString(4, "m@gmail.com");
  p.setString(5, "banhalore");
  
  int i=p.executeUpdate();
  
  System.out.println("insertion done....");
  
 }
}
```

```java
import java.sql.*;
import java.util.*;
public class InsertWithScan 
{
 public static void main(String[] args)throws Exception
 {
  Class.forName("com.mysql.jdbc.Driver");
  Connection cn=DriverManager.getConnection("jdbc:mysql://localhost:3307/mycgc","root","root");
  String s="insert into student values(?,?,?,?,?)"; // ? represent number of columns
  PreparedStatement p=cn.prepareStatement(s);
  
  Scanner sc=new Scanner(System.in);
  while(true)
  {
   System.out.println("Enter id");
   int id=sc.nextInt();
   System.out.println("Enter Name");
   String nm=sc.next();
   System.out.println("Enter Course");
   String cs=sc.next();
   System.out.println("Enter Email");
   String em=sc.next();
   System.out.println("Enter Address");
   String ad=sc.next();
   
   p.setInt(1, id);
   p.setString(2,nm);
   p.setString(3,cs);
   p.setString(4,em);
   p.setString(5,ad);
   
   int i=p.executeUpdate();
   
   System.out.println("Insertion done.....");
   
   System.out.println("Do you want to continue[yes/no]");
   String option=sc.next();
   
     if(option.equalsIgnoreCase("no"))
     {
      break;
     }
  }
 }
}
```

```java
import java.sql.*;
public class Select
{
 public static void main(String[] args)throws Exception
 {
  Class.forName("com.mysql.jdbc.Driver");
  Connection cn=DriverManager.getConnection("jdbc:mysql://localhost:3307/mycgc","root","root");
  String s="select * from student";
  PreparedStatement p=cn.prepareStatement(s);
  
  ResultSet r=p.executeQuery();
  
  while(r.next())
  {
   String id=r.getString("id");
   String nm=r.getString("name");
   String cs=r.getString("course");
   String em=r.getString("email");
   String ad=r.getString("address");
   
   System.out.println(id+" "+nm+" "+cs+" "+em+" "+ad);
  }
 }
}
```

```java
import java.sql.*;
public class UpdateAndDelete
{
 public static void main(String[] args)throws Exception
 {
  Class.forName("com.mysql.jdbc.Driver");
  Connection cn=DriverManager.getConnection("jdbc:mysql://localhost:3307/mycgc","root","root");
  //String s="update student set address='bangalore city' where id=4";  
  String s="delete from student where id=4";
  PreparedStatement p=cn.prepareStatement(s);
  
  int i=p.executeUpdate();
  System.out.println("done");
 }
}
```
