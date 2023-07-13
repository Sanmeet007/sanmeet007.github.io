# Multi Threading in JAVA

## What is a thread

A thread is a light weight process.
A thread in Java is a lightweight unit of execution that runs concurrently with other threads, allowing for concurrent and parallel execution of tasks.

## How to create a thread

1. Using Thread class
1. Using Runnable

### Thread Class

We need to override run method which basically runs the code in it in a new thread.

```java

class Mythread extends Thread{
    
    @Override
    public void run(){
        // Thread code here
    }

}

public class App{

    public static void main(String[] args){
        Mythread t = new Mythread();

        // Used to start a new thread 
        t.start();
    }
}
```

### Runnable Class

Using Runnable class we can implement it to our custom process class .

```java

class MyProcessRunner implements Runnable{
    @Override 
    public void run(){
        // Thread code
    }
}

public class App{

    public static void main(String[] args){
        Thread t = new Thread(new MyProcessRunner());
        t.start();
    }
}
```

### Using Thread class with Runnable

```java
public class Appp{
   public static void main(String[] args){
        Thread t = new Thread(new Runnable(){
            @Override 
            public void run(){
                // thread code
            }
        })
   }
}
```

## `volatile` keyword

Threads can cache the values of the main thread which they don't think will change
Example : Changing the loop variable in the code below

```java
class Mythread extends Thread{
    
    // This value can be cached as it remains true always 
    // for the new thread formed from this
    private volatile boolean running = true;

    @Override 
    public void run(){
        // Here running might be true always 
        // causing the infinte loop 
        // to solve we used the volatile keyword
        while(running) {
            // Thread code
        }
    }

    /// ? Shutdowns the thread execution
    public shutdown(){
        running = false;
    }
}

public class App{
    public static void main(String[] args){
        MyThread t = new MyThread();
        t.start();
    }
}

```

## `synchornized` keyword

This is keyword which is used to make the threads run a method in sync .
The sync is implemented using the intrinsic lock . Each thread needs to accquire the lock before execution of a method which is marked **synchronized**

Example  :

```java

public class App{
    private int count; // initial 0 because of instance var 
    
    public static void main(String[] args){
        App app = new App();
        app.doWork();
    }

    public synchronized void increment(){
        // Now i am atomic 
        count++;
    }

    void doWork(){
        Thread t1 = new Thread(new Runnable(){

            @Override 
            public void run(){
                for (int i = 0; i < 10_000; i++) {

                    // not an atomic operation causes threads to change 
                    // the value inconsistently 
                    // solved by synchronized ! 
                    // ------------------------
                    // count++; 


                    // Instead calling 
                    increment();
                }
            }
        });

        Thread t2 = new Thread(new Runnable(){
            @Override 
            public void run(){

                for (int i = 0; i < 10_000; i++) {

                    // not an atomic operation causes threads to change 
                    // the value inconsistently 
                    // solved by synchronized ! 
                    // ------------------------
                    // count++; 


                    // Instead calling 
                    increment();
                }
            }
        });


        try{

            t1.start();
            t2.start();

            
            // Joining the threads to main inorder for their execution first before the code below runs 
            t1.join();
            t2.join();
        }catch (Exception e){
            // Prints the errors if any 
            e.printStackTrace();
        }

        // If proceses wern't synced to the main then the value
        // comes out to be  0 since processed are getting started
        System.out.println(count);
    }
}
```

### Synchronized code blocks

When we have 2 threads excuting 2 sperate methods of the same object then using `synchronized` on methods will make threads to accquire the intrinsic lock on the Class Object itself and by this we have only 1 lock available to us , which will be shared among them. Hence when t1 is exucting m1 then t2 will wait for t1 to finish , when t1 has finished executing t2 will acquire lock thus making t1 idle and not executing m2 until t2 has finished executing m1.

> Here t1 and t2 are threads; m1 and m2 are methods of same object.

Inorder to solve and have seperate locks we can create locks using syntax :

```java
    Object mylock  = new Object()
```

Example :

```java
/**

* Here the problem is we have only one intrinsic lock on the App class Object so when we execute stageOne() then t1 cannot start excuting stageTwo() unless the stageOne() of t2 is complete.
*
* Soultion create seperate locks with sperate synchronized code blocks
 */

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class App {
    private Random random = new Random();

    // creating locks
    private Object lock1 = new Object();
    private Object lock2 = new Object();

    private List<Integer> li1 = new ArrayList<Integer>();
    private List<Integer> li2 = new ArrayList<Integer>();

    public void stageOne() {

        // Synchronized code block

        synchronized (lock1) {

            try {
                Thread.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            li1.add(random.nextInt(100));
        }
    }

    public void stageTwo() {
        synchronized (lock2) {

            try {
                Thread.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            li2.add(random.nextInt(100));
        }

    }

    public void process() {
        for (int i = 0; i < 1000; i++) {
            stageOne();
            stageTwo();
        }
    }

    public static void main(String[] args) {
        App app = new App();

        System.out.println("Starting...");

        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                app.process();
            }
        });
        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                app.process();
            }
        });
        long start = System.currentTimeMillis();

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        long end = System.currentTimeMillis();

        System.out.println("Ending...");
        System.out.println("Time taken : " + (end - start));
        System.out.println("List 1 : " + app.li1.size());
        System.out.println("List 2 : " + app.li2.size());
    }
}
```

### Thread pools

A thread pool is a collection of pre-initialized threads that are available to perform tasks concurrently, providing improved performance and resource management in multi-threaded applications.

#### ExecutorService

In Java, the `ExecutorService` interface is part of the `java.util.concurrent` package and provides a framework for executing and managing asynchronous tasks. It acts as a higher-level replacement for working directly with threads.

The `ExecutorService` interface defines methods for submitting tasks for execution and provides control over how tasks are executed, monitored, and terminated. Some of the key methods provided by the `ExecutorService` interface include:

1. `execute(Runnable task)`: Submits a `Runnable` task for execution without expecting a result. The task will be executed asynchronously by one of the threads managed by the `ExecutorService`.

2. `submit(Callable<T> task)`: Submits a `Callable` task for execution and returns a `Future` object representing the pending result of the computation. The `Future` object can be used to retrieve the result once it is available.

3. `shutdown()`: Initiates a graceful shutdown of the `ExecutorService`. It allows previously submitted tasks to complete execution but prevents new tasks from being accepted. Once all tasks have completed, the `ExecutorService` terminates.

4. `shutdownNow()`: Attempts to forcibly shut down the `ExecutorService`, canceling all pending tasks and interrupting any actively executing tasks. The method returns a list of tasks that were submitted but not started.

5. `awaitTermination(long timeout, TimeUnit unit)`: Blocks the current thread until the `ExecutorService` has completed its shutdown or the specified timeout has elapsed.

`ExecutorService` provides several implementations, such as `ThreadPoolExecutor`, which manages a pool of worker threads, allowing efficient reuse of threads and control over thread pooling and task scheduling.

By using `ExecutorService`, developers can focus on the logic of their tasks while leaving the details of thread management, task scheduling, and resource allocation to the framework. This abstraction promotes better scalability, performance, and maintainability of concurrent applications.

Example :

```java
/**
 * Thread Pools
 * Removes the overhead to start a new thread 
 * 
 * Managing alot of threads at same time 
 */

// Thread pools

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

class Processor implements Runnable {
    static private int currentId = 1;

    private int id;

    public Processor() {
        this.id = currentId++;
    }

    @Override
    public void run() {
        System.out.println("Starting " + id);
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Completed " + id);
    }

}

public class App {
    public static void main(String[] args) {
        // Thread pools like no. of workers in
        // a factory to perform several tasks

        // After a thread has completed one task a new task is assigned to it
        // Here we have created 2 threads to handle task
        ExecutorService executorService = Executors.newFixedThreadPool(2);

        for (int i = 0; i < 5; i++) {
            // Submitting a task 
            executorService.submit(new Processor()); 
        }

        // Stops accepting new tasks and shut itself down when all tasks are completed
        executorService.shutdown();

        System.out.println("All tasks submitted");

        try {
            executorService.awaitTermination(1, TimeUnit.DAYS);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("All tasks completed");

    }
}

```

### Countdown latches

  A synchronization aid that allows one or more threads to wait until a set of
  operations being performed in other threads completes.

```java

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;



class Processor implements Runnable {
    private CountDownLatch latch;

    // passing latch 
    public Processor(CountDownLatch latch) {
        this.latch = latch;
    }

    @Override
    public void run() {
        System.out.println("Started");
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Decreasing countdown after the run() has been executed 
        latch.countDown();
    }

}

public class App {

    public static void main(String[] args) {
        CountDownLatch latch = new CountDownLatch(3);
        ExecutorService executor = Executors.newFixedThreadPool(3);

        for (int i = 0; i < 3; i++) {
            executor.submit(new Processor(latch));
        }

        // Shuting down the executor to accept new tasks
        executor.shutdown();

        try {
            // awaiting for all the processes to completed and decrease the latch count to 0 
            latch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Completed");
    }

}

```

### Producer Consumer  

Implementation of producer consumer problem solution using `BlockingQueue` where element added is put asynchronously and we can take the first value out.

Methods used:

1. `.take()` : Returns and removes the element from the queue
1. `.put()` : Adds the element to the queue

> Queue is shared by mulitple threads where any thread can put or take data

#### Example

```java
import java.util.Random;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class App {

    // FIFO Queue
    static private BlockingQueue<Integer> queue = new ArrayBlockingQueue<Integer>(10);

    public static void main(String[] args) {
        Thread t1 = new Thread(new Runnable() {

            @Override
            public void run() {
                try {
                    producer();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        Thread t2 = new Thread(new Runnable() {

            @Override
            public void run() {
                try {
                    consumer();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    private static void producer() throws InterruptedException {
        Random random = new Random();
        while (true) {
            queue.put(random.nextInt(100));
        }
    }

    private static void consumer() throws InterruptedException {
        Random random = new Random();

        while (true) {
            Thread.sleep(100);
            if (random.nextInt(10) == 0) {
                Integer value = queue.take();
                System.out.println("Taken value : " + value + "; Queue size is :: " + queue.size());
            }

        }
    }
}

```

### Wait and Notify

Wait and notify methods are used in synchronized block.

- `wait` :  Passes controls to other thread i.e. relinquishes the accquired lock

- `notify` : Notifies other threads they are ready to wake . But it never relinquishes the accquired lock

#### Example (producer consumer unimplemented)

```java

/**
 * Wait and Notify
 */

import java.util.Scanner;

class Processor {
    public void produce() throws InterruptedException {

        synchronized (this) {
            System.out.println("Producer thread is running...");
            wait(); // called in synchronized block only
            System.out.println("Resumed.");
        }
    }

    public void consume() throws InterruptedException {

        Scanner scanner = new Scanner(System.in);
        Thread.sleep(2000);

        synchronized (this) {

            System.out.println("Waiting for return key.");
            scanner.nextLine();
            System.out.println("Return key pressed");

            // notifies i am done with lock but doesn't releases lock
            notify(); // only be in synchronized block

            // Exiting from this block relinquishes the intrinsic lock (on this object here)

            // ? PROOF uncomment to see
            // Thread.sleep(10000);
        }
        scanner.close();
    }
}

public class App {

    public static void main(String[] args) throws InterruptedException {
        final Processor p = new Processor();

        Thread t1 = new Thread(() -> {
            try {
                p.produce();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        Thread t2 = new Thread(() -> {
            try {
                p.consume();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        t1.start();
        t2.start();

        t1.join();
        t2.join();
    }
}
```

#### Example (producer consumer implemented)

```java


import java.util.LinkedList;
import java.util.Random;

class Processor {
    private LinkedList<Integer> li = new LinkedList<Integer>();
    private static int x = 0;

    private final int LIMIT = 10;
    private Object lock = new Object();

    public void produce() throws InterruptedException {

        while (true) {

            synchronized (lock) {
                while (li.size() == LIMIT) {
                    lock.wait();
                }
                li.add(x++);

                lock.notify();
            }
        }

    }

    public void consume() throws InterruptedException {
        Random random = new Random();

        while (true) {
            synchronized (lock) {

                while (li.size() == 0) {
                    lock.wait();
                }

                System.out.print("List size is : " + li.size());
                int value = li.removeFirst();
                System.out.println("; value is : " + value);

                lock.notify();
            }
            Thread.sleep(random.nextInt(500));
        }
    }
}

public class App {

    public static void main(String[] args) throws InterruptedException {
        final Processor p = new Processor();

        Thread t1 = new Thread(() -> {
            try {
                p.produce();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        Thread t2 = new Thread(() -> {
            try {
                p.consume();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        t1.start();
        t2.start();

        t1.join();
        t2.join();
    }
}

```

### Re-Entrant Lock

Like wait and notify

```java

/**
 * Re-entrant locks
 */

import java.util.Scanner;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

/**
 * App
 */

class MyRunner {

    private int count = 0;
    private Lock lock = new ReentrantLock();
    private Condition cond = lock.newCondition();

    private void increment() {
        for (int i = 0; i < 10_000; i++) {
            count++;
        }
    }

    public void fristThread() throws InterruptedException {
        lock.lock();
        System.out.println("Waiting... ");
        cond.await();
        System.out.println("Woken up");

        try {
            increment();
        } finally {
            lock.unlock();
        }

    }

    public void secondThread() throws InterruptedException {
        Thread.sleep(1000);
        lock.lock();
        System.out.println("Press the return key");
        Scanner scanner = new Scanner(System.in);
        scanner.nextLine();

        System.out.println("Got return key");

        try {
            increment();
        } finally {
            cond.signal();
            lock.unlock();
        }
        scanner.close();
    }

    public void finished() {
        System.out.println("Count is : " + count);
    }
}

public class App {
    public static void main(String[] args) {

        final MyRunner runner = new MyRunner();

        Thread t1 = new Thread(() -> {
            try {
                runner.fristThread();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        Thread t2 = new Thread(() -> {
            try {
                runner.secondThread();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (Exception e) {
            e.printStackTrace();
        }

        runner.finished();

    }
}
```

### Deadlock

A situation where t1 thread wants to acquire a lock l2 but has acquired lock l1 and lock l2 has already been acquired by thread t2 then t2 demands for lock l1 and t1 demands for lock l2 both being used thus creating a deadlock situation.

```java
import java.util.Random;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

class Account {
    private int balance = 10_000;

    public void deposit(int amount) {
        balance += amount;
    }

    public void withdraw(int amount) {
        balance -= amount;
    }

    public int getBalance() {
        return balance;
    }

    public static void transfer(Account a1, Account a2, int amount) {
        a1.withdraw(amount);
        a2.deposit(amount);
    }
}

class MyRunner {
    private Account acc1 = new Account();
    private Account acc2 = new Account();

    private Lock lock1 = new ReentrantLock();
    private Lock lock2 = new ReentrantLock();

    // Acquires lock safely and stops condition of deadlocks
    private void acquireLocks(Lock fl, Lock fl2) throws InterruptedException {
        while (true) {
            // accquire locks
            boolean gotFirstLock = false;
            boolean gotSecondLock = false;

            try {
                gotFirstLock = fl.tryLock();
                gotSecondLock = fl2.tryLock();
            } finally {
                if (gotFirstLock && gotSecondLock) {
                    return;
                } else {
                    if (gotFirstLock) {
                        fl.unlock();
                    }
                    if (gotSecondLock) {
                        fl2.unlock();
                    }
                }
            }
            Thread.sleep(100);
        }
    }

    public void fristThread() throws InterruptedException {

        Random random = new Random();

        for (int i = 0; i < 10_000; i++) {

            this.acquireLocks(lock1, lock2);

            try {

                Account.transfer(acc1, acc2, random.nextInt(100));
            } finally {
                lock1.unlock();
                lock2.unlock();
            }

        }
    }

    public void secondThread() throws InterruptedException {
        Random random = new Random();

        // Deadlock situation
        /**
         * lock2.lock();
         * lock1.lock();
         */

        this.acquireLocks(lock1, lock2);

        try {

            Account.transfer(acc2, acc1, random.nextInt(100));
        } finally {
            lock1.unlock();
            lock2.unlock();
        }

    }

    public void finished() {
        System.out.println("Account 1 balance : " + acc1.getBalance());
        System.out.println("Account 2 balance : " + acc2.getBalance());
        System.out.println("Total balance : " + (acc1.getBalance() + acc2.getBalance()));
    }
}

public class App {
    public static void main(String[] args) {

        final MyRunner runner = new MyRunner();

        Thread t1 = new Thread(() -> {
            try {
                runner.fristThread();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        Thread t2 = new Thread(() -> {
            try {
                runner.secondThread();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (Exception e) {
            e.printStackTrace();
        }

        runner.finished();

    }
}

```

### Semaphores

In Java, a semaphore object is a synchronization primitive that allows controlling access to a shared resource. It is part of the `java.util.concurrent` package and provides a way to manage concurrent access to a limited number of permits.

A semaphore maintains a count of available permits and supports two main operations: acquiring a permit and releasing a permit. When a thread wants to access a shared resource, it needs to acquire a permit from the semaphore. If a permit is available, the semaphore decrements its count, allowing the thread to proceed. If no permit is available, the thread may be blocked until a permit becomes available.

The number of permits associated with a semaphore determines how many threads can concurrently access the shared resource. For example, if a semaphore is initialized with a count of 5, it means that up to 5 threads can acquire permits and access the resource simultaneously. If all permits are already acquired, any additional threads will have to wait until a permit is released.

The `Semaphore` class in Java provides constructors to create a semaphore object with an initial count of permits. It also provides methods such as `acquire()` to acquire a permit, `release()` to release a permit, and `availablePermits()` to get the number of permits currently available.

Semaphores are often used to control access to resources with limited capacity, such as database connections, thread pools, or any other shared resource where the number of concurrent accesses needs to be regulated.

> Semaphore with only one permit can be used  as lock

#### Example of semaphore as a lock

```java


public class App {
    public static void main(String[] args) throws Exception {
        Semaphore sem = new Semaphore(1, false);

        sem.acquire();
        sem.release();

        System.out.println("Available permits : " + sem.availablePermits());
    }
}
```

### Example of semaphore

```java

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

/**
 * Semaphores
 * 
 * 
 */

class Connector {
    public static Connector instance = new Connector();

    // Helps to create a batch of threads
    private Semaphore sem = new Semaphore(10);

    private int connections = 0;

    private Connector() {

    }

    public static Connector getInstance() {
        return instance;
    }

    public void connect() {
        try {
            sem.acquire();
            doConnect();
        } catch (Exception E) {
            //
        } finally {
            sem.release();
        }
    }

    public void doConnect() {
        synchronized (this) {
            connections += 1;
            System.out.println("Current connections : " + connections);
        }
        try {
            Thread.sleep(200);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        synchronized (this) {
            connections -= 1;
        }

    }

}

public class App {
    public static void main(String[] args) throws Exception {

        ExecutorService executor = Executors.newCachedThreadPool();

        for (int i = 0; i < 200; i++) {
            executor.submit(() -> {

                try {
                    Connector.getInstance().connect();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
        }

        executor.shutdown();
        executor.awaitTermination(1, TimeUnit.DAYS);

    }
}

```

### Callable and Future

Allows thread code to throw exception & return

#### Example of Callable and Future

```java

import java.io.IOException;
import java.util.Random;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;


public class App {

    public static void main(String[] args) {
        ExecutorService executor = Executors.newCachedThreadPool();

        // Future is the return type which Callable returns
        Future<Integer> future = executor.submit(new Callable<Integer>() {
            // Callable takes the type you want to return from the thread run

            @Override
            public Integer call() throws Exception {
                System.out.println("Starting...");
                Random random = new Random();

                int duration = random.nextInt(4000);

                if (duration > 2000) {

                    // The .get() method won't show this exception instead it will be execution
                    // exception
                    throw new IOException("Waiting for too long");
                }

                try {
                    Thread.sleep(duration);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

                System.out.println("Finished.");
                return duration;
            }
        });

        executor.shutdown();

        // Tells if thread has finished processing
        future.isDone();

        try {
            // .get method is blocking method until future resolves :-)
            System.out.println("Result is : " + future.get());
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            IOException ex = ((IOException) e.getCause());

            System.out.println(ex.getMessage());
        }

    }

}

```

### Interrupts in thread

```java

import java.util.Random;

/**
 * Interrupting
 */
public class App {
    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(() -> {
            Random random = new Random();
            for (int i = 0; i < 1e8; i++) {

                // Returns the current thread
                Thread currentThread = Thread.currentThread();
                if (currentThread.isInterrupted()) {
                    System.out.println("Interrupted");

                    // Stopping execution
                    break;
                }
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    break;
                }

                Math.sin(random.nextDouble());
            }
        });

        t1.start();
        Thread.sleep(500);

        // Tells thread it is being interrupted by seting a flag
        t1.interrupt();

        t1.join();

        System.out.println("Finished");
    }

}
```
