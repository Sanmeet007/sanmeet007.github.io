# Day 8

## String

It is a sequence of character which are enclosed within double quotes.

> Note:- String object immutable means once you create object of String class then content never be changed

There are two ways to create object of **_String_** class :

1. using `literals`

```java
 String s="any statement";
```

2. using `new keyword`

```java
 String s=new String("Any statement");
```

```java
class Test
{
  public static void main(String[] args) {
    String s="java is an object oriented programming language";
    System.out.println(s);

    //length() is used to find length();
    System.out.println(s.length());
    
    //concat() is used to add content
    s.concat(" haa janta hu");
    System.out.println(s);
    
    //if u want to add to add content then must be create another object 
    String s1=s.concat(" haa janta hu");
    System.out.println(s1);
    
    //toUpperCase() and toLowerCase()
    System.out.println(s.toUpperCase());
    System.out.println(s.toLowerCase());
    
    //charAt() is used to find character
    System.out.println(s.charAt(2));
    System.out.println(s.charAt(4));
    System.out.println(s.charAt(2));
    
    //substring() is used to find multiple chaeacter
    System.out.println(s.substring(2,23));
    
    //replace() is used to replace word
    System.out.println(s.replace("java","python"));
  }
}
```

## Interview questions

### 1. What is java

Java is a widely-used programming language known for its simplicity, platform independence, and strong community support. It is a popular choice for building a wide range of applications, including desktop, web, and mobile applications.

From an interview perspective, here are some key points to consider about Java:

1. Object-Oriented Programming (OOP): Java is a fully object-oriented programming language, which means it emphasizes the use of objects to represent data and behavior. Interviewers often look for candidates who have a strong understanding of OOP principles like encapsulation, inheritance, and polymorphism.

2. Platform Independence: Java is designed to be platform-independent, thanks to its "write once, run anywhere" principle. This means that Java programs can run on any platform with a Java Virtual Machine (JVM). Interviewers might ask questions about how Java achieves platform independence and the role of the JVM.

3. Memory Management: Java manages memory automatically through a process called garbage collection. It relieves developers from manual memory management tasks like allocation and deallocation. Understanding how Java's garbage collection works and how to optimize memory usage can be valuable in an interview.

4. Exception Handling: Java provides a robust exception handling mechanism to handle runtime errors and exceptions. Interviewers often ask about how exceptions are caught, handled, and propagated in Java applications. Familiarity with try-catch blocks, checked and unchecked exceptions, and best practices for exception handling is essential.

5. Multithreading: Java has built-in support for multithreading, enabling concurrent execution of multiple tasks within a single program. Interviewers might inquire about the basics of thread creation, synchronization, thread safety, and common issues related to multithreading, such as deadlocks and race conditions.

6. Java Collections Framework: The Java Collections Framework provides a set of classes and interfaces for storing and manipulating collections of objects. Having a good understanding of collections, such as ArrayList, LinkedList, HashMap, and HashSet, is crucial for efficient data manipulation. Interviewers may ask about the differences between various collection types and when to use each one.

7. Java APIs and Libraries: Java has a vast ecosystem of APIs and libraries that can greatly simplify development tasks. It's beneficial to have knowledge of popular libraries and frameworks like Spring, Hibernate, and JavaFX. Familiarity with Java Development Kit (JDK) tools, such as the Java compiler (javac) and the Java Virtual Machine (java), is also important.

8. Design Patterns: Knowing common design patterns in Java, such as Singleton, Factory, and Observer, demonstrates good software engineering practices. Interviewers may ask about your familiarity with design patterns and how they can be applied to solve common software design problems.

9. Performance and Optimization: Java's performance can be optimized through various techniques, such as using efficient data structures, minimizing object creation, and optimizing code execution. Understanding performance considerations and profiling tools like JProfiler or VisualVM can impress interviewers who are looking for candidates who can write efficient and scalable Java code.

10. Recent Java Features: Being aware of recent updates and features in Java, such as lambda expressions, streams, modules (Java 9+), and records (Java 14+), showcases your enthusiasm for staying up-to-date with the language.

### 2. Features of java

Java is a versatile programming language that offers a wide range of features. Here are some key features of Java:

1. Object-Oriented: Java is a fully object-oriented programming language, which means it follows the principles of encapsulation, inheritance, and polymorphism. It provides support for creating and manipulating objects, making it easier to design modular and reusable code.

2. Platform Independence: One of Java's most significant features is its platform independence. Java programs are compiled into bytecode, which can run on any platform that has a Java Virtual Machine (JVM). This "write once, run anywhere" capability allows Java applications to be developed and deployed across different operating systems without the need for recompilation.

3. Garbage Collection: Java incorporates automatic memory management through a technique called garbage collection. It relieves developers from manual memory allocation and deallocation tasks. The JVM automatically detects and removes unused objects, freeing up memory and preventing memory leaks.

4. Robustness and Safety: Java emphasizes robustness and safety in its design. It includes features like strong type-checking, exception handling, and runtime checks to ensure program integrity and prevent common programming errors. These features contribute to the overall stability and reliability of Java applications.

5. Rich Standard Library: Java provides a comprehensive Standard Library that offers a wide range of classes and APIs for common programming tasks. The Standard Library includes packages for input/output operations, networking, database connectivity, graphical user interfaces (GUIs), and much more. This extensive library simplifies development and saves time by providing ready-to-use components.

6. Multithreading: Java has built-in support for multithreading, allowing developers to write concurrent programs that can execute multiple tasks simultaneously. Multithreading enables efficient utilization of system resources, improves performance, and facilitates the development of responsive and interactive applications.

7. Portability: Java's platform independence and JVM-based execution model make it highly portable. Java programs can run on various devices, including desktops, servers, mobile devices, and embedded systems. This portability has contributed to Java's widespread adoption and popularity.

8. Security: Java incorporates robust security mechanisms to protect against vulnerabilities and malicious activities. It includes features like bytecode verification, security managers, and a security architecture that restricts unauthorized access to system resources. Java's security features make it a suitable choice for developing applications that handle sensitive data and require secure execution environments.

9. Dynamic Reflection: Java supports dynamic reflection, which enables the examination and modification of objects and classes at runtime. Reflection allows for introspection and the ability to access and modify class metadata, invoke methods dynamically, and perform other advanced operations. Reflection is commonly used in frameworks and libraries to provide flexibility and extensibility.

10. Community Support: Java has a vast and active community of developers, which contributes to its strength. The Java community offers numerous resources, including forums, documentation, open-source libraries, and frameworks. This support ecosystem fosters collaboration, knowledge sharing, and continuous improvement within the Java development community.

These features collectively make Java a powerful and versatile programming language, suitable for a wide range of applications, from small-scale projects to enterprise-level systems.

### 3. Java is pure object oriented programming language or not ?

Java is often referred to as an "object-oriented programming (OOP) language," but it's more accurate to say that Java is predominantly object-oriented. While Java supports and encourages the use of object-oriented programming principles, it also incorporates non-object-oriented elements.

Java is considered predominantly object-oriented because it provides the following key features of OOP:

1. Encapsulation: Java supports encapsulation, which allows bundling data and methods into objects and hiding internal implementation details.

2. Inheritance: Java supports inheritance, enabling the creation of new classes (derived or child classes) based on existing classes (base or parent classes). Inheritance promotes code reuse and hierarchical organization of classes.

3. Polymorphism: Java supports polymorphism, allowing objects of different classes to be treated as objects of a common superclass. Polymorphism enables dynamic method dispatch and method overriding.

4. Abstraction: Java supports abstraction, allowing the creation of abstract classes and interfaces that define common characteristics and behavior. Abstraction simplifies complex systems by providing a high-level view.

However, Java is not a pure object-oriented programming language because it also incorporates non-object-oriented elements, such as:

1. Primitive Data Types: Java includes primitive data types (e.g., int, boolean, char) that are not objects and do not inherit from a class. They are used for efficiency and simplicity in handling basic data.

2. Static Methods and Variables: Java allows the declaration of static methods and variables at the class level, which can be accessed without instantiating objects. Static members are associated with the class itself rather than individual objects.

3. Procedural Programming Elements: While Java primarily encourages an object-oriented approach, it also supports procedural programming elements. For instance, Java allows the use of procedural-style code blocks and control flow statements (if-else, loops) outside of class and method contexts.

Despite these non-object-oriented elements, Java's core language features and design philosophy heavily favor object-oriented programming. The majority of Java code is written using object-oriented principles, and the Java ecosystem, including its Standard Library and popular frameworks, is predominantly object-oriented in nature.

### 4. What is JIT(Just in time compiler)

Just-In-Time (JIT) compilation is a technique used by Java and some other programming languages to improve the performance of code execution. It is an integral part of the Java Virtual Machine (JVM).

In Java, the source code is compiled into bytecode, which is an intermediate representation of the program. When a Java program is executed, the JVM interprets the bytecode instructions one by one, which can be relatively slower compared to native machine code execution.

To optimize the performance, the JVM employs the JIT compiler. Here's how it works:

1. Interpretation: Initially, the JVM interprets the bytecode instructions directly, executing them line by line. This approach ensures platform independence but can be slower than native code execution.

2. Profiling: As the bytecode instructions are executed, the JVM collects runtime information about the program's behavior, such as frequently executed code paths, hotspots, and method call frequencies. This information is known as profiling data.

3. Just-In-Time Compilation: Based on the profiling data, the JIT compiler identifies portions of the bytecode that are frequently executed, also known as "hot spots." The JIT compiler then dynamically compiles these hot spots into native machine code, specific to the underlying hardware and operating system.

4. Native Code Execution: Once the JIT compiler generates the native code, subsequent executions of the hot spots use the compiled native code directly instead of interpreting the bytecode. Native code execution is generally faster than bytecode interpretation since it can take full advantage of the underlying hardware's capabilities.

By dynamically compiling frequently executed code segments into native code, the JIT compiler effectively optimizes the performance of the Java program. It eliminates the need for repetitive interpretation of the same code, leading to faster execution times.

It's important to note that not all code in a Java program is compiled by the JIT compiler. The JVM uses a combination of interpretation and compilation to balance startup time and overall performance. Only the hot spots identified by the profiling information are subject to JIT compilation, while less frequently executed code remains interpreted.

JIT compilation is a crucial component of Java's "write once, run anywhere" principle, as it allows Java programs to achieve a balance between portability and performance optimization on different platforms and hardware configurations.

### 5. Diff b/w object oriented and object based programming language

?

### 6. Diff b/w jdk,jre and jvm

Here's a tabular comparison between JDK (Java Development Kit), JRE (Java Runtime Environment), and JVM (Java Virtual Machine):

| Aspect                      | JDK (Java Development Kit)                          | JRE (Java Runtime Environment)                    | JVM (Java Virtual Machine)                      |
|-----------------------------|----------------------------------------------------|--------------------------------------------------|-------------------------------------------------|
| Definition                  | Software development kit for Java programming      | Runtime environment for executing Java programs | Virtual machine that executes Java bytecode      |
| Components                  | Compiler, debugger, libraries, tools, and utilities| JVM, libraries, and runtime environment          | Interpreter, Just-In-Time (JIT) compiler, runtime|
| Development Purpose         | Used for Java application development               | Not used for development; used for execution    | Not used for development; used for execution    |
| Compilation                 | Can compile Java source code into bytecode          | N/A                                              | N/A                                             |
| Execution of Java Programs  | Can execute Java programs                           | Can execute Java programs                       | Executes Java bytecode                          |
| Compatibility               | JDK includes JRE, so it's compatible with JRE       | JRE is a subset of JDK and has limited features | Compatible with bytecode generated by JDK        |
| Debugging and Profiling     | Provides tools for debugging and profiling          | N/A                                              | N/A                                             |
| Java Development            | JDK provides tools for development, such as IDEs    | N/A                                              | N/A                                             |
| Deployment and Distribution | Applications can be packaged and distributed with JDK | Applications are typically distributed with JRE | Applications are executed using JVM             |
| Examples                    | Oracle JDK, OpenJDK, AdoptOpenJDK                    | Oracle JRE, OpenJRE, AdoptOpenJRE                | Oracle JVM, OpenJDK JVM, HotSpot JVM            |

While JDK, JRE, and JVM are closely related, they serve distinct purposes within the Java ecosystem. The JDK is used for Java application development and includes the necessary tools, libraries, and utilities. The JRE provides the runtime environment for executing Java programs, while the JVM executes the compiled Java bytecode.

### 7. Diff b/w class and object

Here's a comparison between a class and an object in Java:

| Aspect                      | Class                                              | Object                                         |
|-----------------------------|----------------------------------------------------|------------------------------------------------|
| Definition                  | A blueprint or template for creating objects       | An instance of a class                         |
| Structure                   | Contains data members (fields) and methods         | Represents a specific instance of a class      |
| Creation                    | A class is created during the development process | An object is created at runtime                |
| Properties                  | Defines the attributes and behavior of objects     | Has state (data) and behavior (methods)        |
| Multiple Instances          | Many objects can be created from a single class    | Each object is a unique instance               |
| Memory Allocation           | Does not consume memory during runtime             | Consumes memory when instantiated              |
| Relationship                | Objects are instances of a class                   | Objects exist within the context of a class    |
| Accessing Members           | Class members can be accessed using class name     | Object members are accessed using object name  |
| Inheritance and Polymorphism| Classes can be inherited and extended              | Objects can exhibit polymorphic behavior       |
| Examples                    | class Car { ... }                                  | Car honda = new Car();                         |

In summary, a class serves as a blueprint or template for creating objects. It defines the attributes and behavior that objects of that class will have. Objects, on the other hand, are instances of a class and represent specific entities with their own state and behavior. Multiple objects can be created from a single class, each with its own unique characteristics. Classes are created during the development process, while objects are created at runtime.

### 8. Diff b/w local instance and static variable

Here's a comparison between local variables (also referred to as instance variables) and static variables in Java:

| Aspect                           | Local/Instance Variable                               | Static Variable                                        |
|----------------------------------|-------------------------------------------------------|--------------------------------------------------------|
| Declaration and Scope            | Declared within a method, constructor, or block        | Declared within a class and outside any method/block    |
| Lifetime                         | Created when the method, constructor, or block is called and destroyed when it completes execution | Created when the class is loaded and exists as long as the program is running |
| Access                           | Accessible only within the method, constructor, or block where it is declared | Accessible from any part of the class or other classes using the class name |
| Memory Allocation                 | Memory allocated separately for each method, constructor, or block execution | Memory allocated only once for the entire class          |
| Initialization                   | Must be explicitly initialized before use             | Can be explicitly initialized or defaults to a predefined value |
| Relationship with Instances      | Each instance of a class has its own copy of instance variables | Shared among all instances of a class and can be accessed and modified by any instance |
| Relationship with Class          | Does not depend on the class and can exist without any instances | Associated with the class itself and does not depend on any instances |
| Usage                            | Used to store data that varies across method invocations or object instances | Used to store data that is shared among all instances or globally in the class |
| Impact on Multithreading         | Each thread has its own copy of local/instance variables, ensuring thread safety | Shared by all threads, so proper synchronization may be needed to ensure thread safety |
| Examples                         | int count = 0;                                         | static int totalCount = 0;                              |

In summary, local (instance) variables are declared within methods, constructors, or blocks, and their values are specific to each execution or instance of an object. They have a limited scope within the method or block where they are declared and must be explicitly initialized.

Static variables, on the other hand, are declared at the class level and exist as long as the program is running. They are shared among all instances of a class and can be accessed and modified using the class name. They are allocated memory only once and can be initialized explicitly or with a default value.

### 10. Diff b/w method and constructor

Here's a comparison between methods and constructors in Java:

| Aspect                      | Method                                              | Constructor                                         |
|-----------------------------|----------------------------------------------------|----------------------------------------------------|
| Definition                  | A method is a block of code that performs a specific task and can be called to execute that task | A constructor is a special method used to initialize objects of a class during their creation |
| Name                        | Can have any name that follows Java naming conventions| Must have the same name as the class               |
| Return Type                 | Can have a return type (void or any other data type) | Does not have a return type (not even void)        |
| Invocation                  | Called explicitly using the method name and optional arguments | Automatically invoked when an object is created     |
| Parameters                  | Can have zero or more parameters                      | Can have zero or more parameters                    |
| Overloading                 | Can be overloaded by defining methods with the same name but different parameter lists | Can be overloaded by defining constructors with different parameter lists |
| Accessibility               | Can have different access modifiers (public, private, protected, or default) | Can have different access modifiers                |
| Overriding                  | Can be overridden in subclasses if defined in a superclass using inheritance | Constructors cannot be overridden                  |
| Purpose                     | Used to perform specific tasks or operations          | Used to initialize the state of an object           |
| Example                     | public void printMessage(String message) { ... }      | public class Person { public Person(String name) { ... } } |

In summary, methods and constructors serve different purposes in Java:

- Methods are blocks of code that perform specific tasks and can be called to execute those tasks. They have a return type (void or other data types) and can be invoked explicitly using the method name.
- Constructors, on the other hand, are special methods used to initialize objects of a class during their creation. They have the same name as the class and do not have a return type. Constructors are automatically invoked when an object is created using the `new` keyword.

### 11. What is main purpose of constructor

The main purpose of a constructor in Java is to initialize the state (data members) of an object when it is created. Constructors play a crucial role in the object-oriented programming paradigm by ensuring that objects are properly initialized before they are used.

Here are the key purposes of constructors:

1. Object Initialization: Constructors are responsible for initializing the instance variables (data members) of an object to their initial values. They set the initial state of the object based on the values provided during object creation.

2. Automatic Invocation: Constructors are automatically invoked when an object is created using the `new` keyword. They ensure that the object is in a valid and usable state by initializing its data members and performing any necessary setup operations.

3. Ensuring Consistency: Constructors help maintain the integrity and consistency of an object by ensuring that its data members are properly initialized. This helps prevent the object from being used in an inconsistent or invalid state.

4. Dependency Injection: Constructors can be used to inject dependencies into an object. They provide a way to pass required dependencies as parameters during object creation, allowing the object to be instantiated with its dependencies already set.

5. Overloading and Customization: Constructors can be overloaded, meaning multiple constructors with different parameter lists can be defined in a class. This allows flexibility in object creation, enabling different ways to initialize objects based on varying parameters or initializations.

6. Inheritance and Superclass Initialization: Constructors are also used in inheritance to ensure that the superclass is properly initialized before initializing the subclass. Constructors can invoke the constructor of the superclass using the `super()` keyword to initialize inherited members.

Overall, constructors ensure that objects are properly initialized with their initial state, enabling them to be used effectively and consistently throughout the program. By providing a way to set up objects during creation, constructors play a fundamental role in object-oriented programming.

### 12. Constructor overloading

Constructor overloading in Java refers to the ability to define multiple constructors within a class, each having a different parameter list. Overloading allows creating objects with different sets of initializations or parameters. Here's an example to demonstrate constructor overloading:

```java
public class Person {
    private String name;
    private int age;
    
    // Default constructor
    public Person() {
        // Default values
        name = "Unknown";
        age = 0;
    }
    
    // Constructor with name parameter
    public Person(String name) {
        this.name = name;
        age = 0; // Default age
    }
    
    // Constructor with name and age parameters
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Getters and setters
    // ...
    
    // Example usage
    public static void main(String[] args) {
        Person person1 = new Person(); // Uses the default constructor
        Person person2 = new Person("John"); // Uses the constructor with name parameter
        Person person3 = new Person("Jane", 25); // Uses the constructor with name and age parameters
        
        System.out.println(person1.getName()); // Output: Unknown
        System.out.println(person2.getName()); // Output: John
        System.out.println(person3.getName()); // Output: Jane
        System.out.println(person3.getAge()); // Output: 25
    }
}
```

In the example above, the `Person` class demonstrates constructor overloading. It defines three constructors:

1. The default constructor, which takes no parameters and sets the `name` to "Unknown" and `age` to 0.
2. A constructor that takes a `name` parameter and sets the `name` to the provided value. The `age` is set to the default value of 0.
3. Another constructor that takes both `name` and `age` parameters and initializes the instance variables accordingly.

By providing different constructor options, the `Person` class allows objects to be created with various initializations. The appropriate constructor is called based on the parameters used during object creation.

In the `main` method, different instances of `Person` are created using the different constructors. The output shows the values of the `name` and `age` variables for each object, demonstrating the effect of constructor overloading.

### 13. Diff b/w this and super

Here's a tabular comparison between the `this` and `super` keywords in Java:

| Aspect             | 'this' Keyword                                            | 'super' Keyword                                             |
|--------------------|-----------------------------------------------------------|-------------------------------------------------------------|
| Definition         | Refers to the current instance of the class                | Refers to the superclass or parent class of the current class|
| Usage              | Used to access instance variables and methods of the class itself | Used to access members (variables, methods, constructors) of the superclass |
| Constructor Usage  | Can be used to call another constructor within the same class | Can be used to call a constructor in the superclass         |
| Method Override    | Can be used to call an overridden method in the superclass  | Can be used to call an overridden method in the superclass   |
| Method Overload    | Can be used to differentiate between overloaded constructors or methods within the same class | Not typically used for method overloading                     |
| Access Modifiers   | Can access instance members (variables, methods) with any access modifier (public, private, protected, or default) | Can access inherited members based on their access modifiers |
| Constructor Chaining | Can be used to invoke other constructors in the same class (constructor chaining) | Can be used to invoke constructors in the superclass (superclass constructor chaining) |
| Example            | public class MyClass { private int number; public MyClass(int number) { this.number = number; } } | public class Subclass extends Superclass { public Subclass() { super(); } } |

In summary, the `this` keyword refers to the current instance of the class and is used to access instance variables, invoke methods, or call another constructor within the same class. It is primarily used for self-reference.

On the other hand, the `super` keyword refers to the superclass or parent class and is used to access members (variables, methods, constructors) of the superclass. It is used to differentiate between the superclass and subclass and can be used to call constructors or invoke overridden methods in the superclass.

### 14. Why doesn't java supports multiple inheritance

Java does not support multiple inheritance due to concerns over complexity, ambiguity, and potential conflicts that can arise when combining features from multiple parent classes. The decision to omit multiple inheritance from Java's feature set was a deliberate design choice aimed at promoting simplicity, maintainability, and the avoidance of certain programming pitfalls. Here are some key reasons why Java opted not to support multiple inheritance:

1. Diamond Problem: Multiple inheritance introduces the "diamond problem," which occurs when a class inherits from two or more classes that have a common superclass. This situation can lead to conflicts when methods or variables with the same name exist in multiple parent classes. Resolving such conflicts in a consistent and predictable manner becomes complex and can cause ambiguity.

2. Fragile Base Class Problem: Multiple inheritance can lead to the "fragile base class problem," where changes to a base class can have unintended consequences on derived classes. Modifying a parent class could potentially break the functionality of unrelated derived classes, making the codebase more fragile and prone to errors.

3. Name Clashes and Ambiguity: Multiple inheritance can introduce conflicts when two or more parent classes define methods or variables with the same name but different implementations. This ambiguity makes it challenging to determine which method or variable to use in the derived class, potentially leading to errors and confusion.

4. Code Complexity and Readability: Supporting multiple inheritance would significantly increase the complexity of the Java language, making code harder to read, understand, and maintain. The absence of multiple inheritance simplifies the language and reduces the learning curve for developers.

5. Interface Implementation: Java provides an alternative mechanism for achieving some benefits of multiple inheritance through interface implementation. Interfaces allow classes to define contracts and inherit from multiple interfaces while avoiding the complexities associated with inheriting from multiple classes.

By omitting multiple inheritance, Java emphasizes the use of single inheritance along with interfaces to achieve code reuse, maintainability, and a simpler language syntax. This design choice helps mitigate potential issues arising from conflicts and complexities associated with multiple inheritance.

### 15. What is polymorphism ? diff b/w method overloading and method or compile time polymorphism and runtime polymorphism

Polymorphism, in the context of object-oriented programming, refers to the ability of an object to take on multiple forms or behave in different ways. It allows objects of different classes to be treated as objects of a common superclass or interface type. Polymorphism is one of the fundamental principles of object-oriented programming and plays a crucial role in achieving code flexibility, extensibility, and code reuse.

There are two main types of polymorphism in Java:

1. Compile-Time Polymorphism (Static Polymorphism):
   - Also known as method overloading or early binding.
   - Occurs when multiple methods in a class have the same name but different parameter lists (either different types or different numbers of parameters).
   - The compiler determines which method to invoke based on the number, types, and order of the method arguments at compile-time.
   - Method overloading allows for flexibility in method invocation and provides convenience by providing different ways to perform similar operations.

2. Runtime Polymorphism (Dynamic Polymorphism):
   - Also known as method overriding or late binding.
   - Occurs when a subclass provides a specific implementation of a method that is already defined in its superclass.
   - In runtime polymorphism, the decision about which method to invoke is made at runtime based on the actual object type.
   - It allows an object to be treated as an object of its own class or as an object of its superclass or interface.
   - Runtime polymorphism facilitates code extensibility, flexibility, and enables polymorphic behavior based on the specific object type at runtime.

Polymorphism allows for writing flexible, reusable, and maintainable code. It promotes code abstraction, modularity, and separation of concerns. By programming to interfaces or superclasses rather than specific implementations, polymorphism enables the interchangeability of objects and promotes code extensibility. It plays a vital role in achieving the "Open-Closed Principle" and enables code to be easily extended without modifying existing code.

### 16. Diff b/w abstract class interface

Here's a tabular comparison between abstract classes and interfaces in Java:

| Aspect                      | Abstract Class                                          | Interface                                               |
|-----------------------------|---------------------------------------------------------|---------------------------------------------------------|
| Definition                  | A class that cannot be instantiated and may contain both abstract and concrete methods | A collection of abstract methods and constant fields      |
| Instantiation               | Cannot be directly instantiated, needs to be extended by a subclass using the `extends` keyword | Cannot be instantiated directly, but can be implemented by classes using the `implements` keyword |
| Inheritance                 | Allows single inheritance (subclasses can extend only one abstract class) | Allows multiple inheritance (a class can implement multiple interfaces) |
| Method Implementation       | Can have both abstract and concrete methods               | Can only have abstract methods (prior to Java 8), but can have default and static methods (Java 8 and later) |
| Fields                      | Can have instance variables (fields)                      | Can only have constant fields (static final variables)   |
| Constructor                 | Can have constructors                                    | Cannot have constructors                                 |
| Access Modifiers            | Can have various access modifiers (public, private, protected, default) for methods and fields | All methods are implicitly public, fields are implicitly public static final |
| Usage                       | Used to define common behavior and provide a partial implementation to be inherited by subclasses | Used to define contracts, establish a common interface, and achieve multiple inheritance-like behavior through implementation |
| Extensibility               | Provides the ability to extend and add new functionality through subclassing | Provides the ability to implement multiple interfaces and achieve functionality from different sources |
| Examples                    | abstract class Shape { ... }                             | interface Drawable { ... }                              |

In summary, abstract classes and interfaces in Java serve different purposes:

- Abstract classes allow for the definition of common behavior and provide a partial implementation that can be inherited by subclasses. They can have both abstract and concrete methods, instance variables, and constructors. Abstract classes enable code reuse and encourage code modularity.

- Interfaces define contracts and establish a common interface that classes can implement. They can only have abstract methods (prior to Java 8), but can also have default and static methods (Java 8 and later). Interfaces promote code extensibility, achieve multiple inheritance-like behavior through implementation, and foster a more loosely coupled design.

Both abstract classes and interfaces play important roles in object-oriented programming, but their usage differs based on the specific requirements and design goals of a program.

### 17. What is encapsulation

Encapsulation is a concept in object-oriented programming that involves bundling data and the methods that operate on that data into a single unit called a class. It provides a way to hide the internal implementation details of an object and control access to its data and behavior.

In brief, encapsulation:

1. Protects data by making it private and providing controlled access through methods.
2. Controls access to the object's data and behavior through access modifiers.
3. Promotes information hiding, as the internal workings of an object are encapsulated within the class.
4. Improves code flexibility by allowing modifications to the internal implementation without affecting other parts of the program that use the class.

Encapsulation helps in building modular, maintainable, and secure code by ensuring data integrity, reducing dependencies, and providing a well-defined interface for interacting with objects.
