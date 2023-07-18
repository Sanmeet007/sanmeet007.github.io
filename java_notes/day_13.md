# Day 13

## Multi-threading

### Thread State Diagram

```md

    +------------------------------+
    |  Thread t = new Thread()     |
    +------------------------------+

    +---------------+                     +-------------------+
    |   NEW STATE   | ==== START() ===>   |   RUNNABLE STATE  | ____
    +---------------+                     +-------------------+     \\
                 /\                         |                        ||
  +----------+   ||                         |    +-----------+       ||
  | RESUME() |   ||                         |    | Suspend() |       ||
  +----------+   ||                         |    +-----------+       ||
                 ||                         |                        \/
                 ||                         |               +-----------------+ 
            +--------------------+   <------|               |   DEAD STATE    |
            |    Non-Runnable    |                          +-----------------+ 
            +--------------------+  


```

### Thread working

```md
    +--------+
    |  NEW   |
    +--------+
            \
             +--------+
             | START  |    
             +--------+
                      \
                       +--------+
                       |   RUN  |
                       +--------+
```

### What is Multi threading

The process of executing multiple Thread simultaneously at the same time is known as Multithreading.
   Ex:Game,multimedia....etc.

There are two way to implement multithreading :

   1. By extends `Thread class`
   2. By implements `Runnable interface`

### What is a Thread

Thread is a light weight sub-process or small unit of processing is known as Thread
   Ex: notepad,wordpad...etc.

#### Life cycle of Thread

  1. `New State` :  MyThread t=new MyThread();
    The Thread is in new state if u are creating object of Thread class but before `start()` method.

  1. `Ready or Runnable State` : After calling start() method the Thread will be enter Runnable state.  

  1. `Running State` :  If thread scheduler allocates CPU for particular thread.
    Thread goes to running state means the `run()` is executed.

  1. `Non-Runnable State` : If the running thread got interrupted of goes to sleeping state at that moment
    it goes to the blocked state or non-runnable state or terminate state.

  1. `Dead State` : After completing run() method dead state will be call.

#### ThreadScheduler

 When multiple thread are executes at the same time but which thread are executes
  first it decided by the ThreadScheduler.

#### Difference between `Thread.start() and Thread.run()`

   1. In the case of Thread.start(), Thread class start() is executed a new thread will be created that is responsible for the execution of run() method.

   1. But in the case of Thread.run() method, no new thread will be created and the run() is executed like a normal method call by the main thread.

#### ThreadPriority

   Every Thread in java has some priority. It may be default priority provided be the JVM or customized(manual) priority provided by the programmer.

##### Three constant values for the thread priority

   1. `MIN_PRIORITY` = 1
   2. `NORM_PRIORITY` = 5   //Thread get by default priority 5
   3. `MAX_PRIORITY` = 10

**Note:**

   1. If two threads having the same priority then we can’t expect exact execution order it depends upon ThreadScheduler.
   1. The thread which is having low priority has to wait until completion of high priority threads.

### Methods of Thread

   1. `currentThread()` : Used to get the current thread in a class.

   1. `getPriority()` : Used to get the current priority of thread.

   1. `setPriority()` : Used to set the current priority of thread.

   1. `getName()` : Used to get the current executing thread name.

   1. `setName()` : Used to set the userdefined name for the thread.

   1. `run()` : Can be executed by multiple thread simultaneously.

   1. `start()` : Used to convert ready state thread to running state.

   1. `sleep()` :  The  sleep() method causes the current thread to sleep for a speciﬁed amount of time in milliseconds.

   1. `suspend()` :  Used to convert running state thread to waiting state thread.
                     suspend() method will never come to running state automatically.

   1. `resume()`: Used to change the suspend thread to ready state(runnable state).
                     without using suspend() method resume() method can’t be used.
   1. `stop()` :  Used to convert running state thread to dead state.

   1. `join()` :  If a Thread wants to wait until completing some other thread then we should go for join() method.

   1. `interrupt()` : The interrupt() is working good whenever our thread enters into waiting state or sleeping state.The interrupted call will be wasted if our thread doesn’t enters into the waiting/sleeping state.
