# Day 16

## JSP

Java Server Pages is a technology which is used to devbeloped dynamic web application.

### Types of tags

#### Declaration tag

Declaring the variables

```jsp
    <%!
        int a = 10 , b = 20;
        int c = a + b;
    %>
```

#### Scriptlet tag

Writing java code

```jsp
    <%
         // Java code here 
    %>
```

#### Expression tag

Echoing or printing (output) the values to the html page

```jsp
      <%= c  %>
```
