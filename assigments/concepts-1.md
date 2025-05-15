TOPIC 1:- HTTP Methods and HTTP Status Codes
 HTTP methods:-> These are the actions perform on resources like web page and API endpoint.
 Mainly four methods:->
   a. GET= Retrives data from the server(safe)
   b. POST = Send data to the server to create something.(unsafe)
   c. PUT = Update a resource completely(unsafe)
   d. DELETE = Deleate a resource(unsafe)
   Can be compared with (CRUD) operation.
 HTTP Status Codes
  These are 3-digit numbers returned by the server to indicate the result of the request.
   1) 1XX: Informational
   2) 2XX: Success[200 ok,201 Created]
   3) 3XX: Redirection[302 not found]
   4) 4XX: Client Errors[401 unauthorized,404 not found]
   5) 5XX: Server Errors[503 service unavailable]

TOPIC 2:-> CSS Selectors
 1) Universal Selector(*):- Selects all elements on the page.
 2) Type Selector :- Selects all elements of a specific tag.
 3) Class Selector(.classname):- Selects all elements with a specific class.
 4) ID Selector (#idname):- Selects a unique element with a specific ID.
 5) Group Selector(,):- Applies the same styles to multiple selectors.
 6) Descendant Selector (space):- Targets elements inside another element.
 7) Child Selector(>):- Selects elements that are direct children.(ul>li{})
 8) Adjacent Sibling Selector(+):- Selects an element that is immediately after another.(h1+p{})
 9) General Sibling Selector (~):- Selects all siblings after a specified element.(h1~p{})
 10) Attribute Selector:- Targets elements based on their attributes.

TPOIC 3:->  GIT Basics ( init , add , commit , push , pull , clone , branch )
  1. git init:-> Initializes a new Git repository in folder.
     command=git init ( This creates a hidden .git folder and starts tracking changes.)
  
  2. git add:-> Adds changes or a specific file.
      command= git add filename.txt(specific file)/ git add.(for all files)
  
  3. git commit:-> Saves the staged changes to the local repository
      command= git commit -m "Your meaning full message"
  
  4. git push:-> Sends local commits to the remote repository(eg. Github).
      command= git push origin main (using main and master depends on branch)

  5. git pull:-> Fetches changes from the remote repositoty and merges them into  our local branch.
      command= git pull origin main

  6. git clone:-> copies an entire remote repository to your local machine.
     command= git clone https://github.com/username/repo-name.git

  7. git branch:-> Used to manage branches (isolated version of project)
      command= git branch (view all branch)
               git branch feature-1 (creats a new branch)
               git checkout feature-1 ( switch to a branch)
               git checkout -b feature-1 ( create and switch in one step)
STEPS:
git init                    # Create new repo
git add .                   # Stage changes
git commit -m "Initial commit"  # Commit changes
git branch -M main          # Rename to main (optional)
git remote add origin https://github.com/user/repo.git
git push -u origin main     # Push to GitHub          

TOPIC 4:-> Callback & Higher-Order Function
  Callback Function :- A function passed as an argument to another function and execute after some operation is completed.
   code example:
               function greet (name, callback){
                console.log("Hi,"+name);
                callback();
               } 
               function sayBye(){
                console.log("Goodbye!");
               }
               greet("Alice",sayBye);

  Higher-Order Function :- A function that either takes one or more functions as arguments(like a callback), or returns another functions as a result.
  Examples:-
       1) Takes a function as argument
          function calculate(a,b,operation){
            return operation(a,b);
          } 
           function add(x,y){
             return x+y;
           }
           console.log(calculate(5,3,add));

        2) Returns a function
           function multiplier(factor){
            return fuhnction(num){
              return num*factor;
            };
           }  
           const double= multiplier(2);
           console.log(double(5));
 Common Higher-Order Functions in JS(.map(), .filter(), .reduce(), setTimeout(), setInterval(), Array.forEach)

TOPIC 5:-> Array Methods: filter , map , forEach , push , pop

  1) filter():- returns a new array with elements that pass a condition( true from a test function).
   Example:-
    const numbers = [ 1,2,3,4,5];
    const even = numbers.filter(num => num % 2== 0);
    consol.log(even);

  2) map():- retirns a new array where each element is transformed based on a function.
   Example:-
     const nums = [ 1,2.3];
     const squared = nums.map(n=>n*n);
     console.log(squared);

  3) forEach():- Performs a function on each element in the array-doesnot return a new array.
   Example:-
       const fruits =["apple", "banana"];
       fruits.forEach(fruit =>{
         console.log(fruit.toUpperCase());
       });

  4) push():- Adds one or more elements to the end of the array. Modifies the original way.
    Example:-      
      const animals = ["cat","dog"];
      animals.push("rabbit");
      console.log(animals);
  
  5) pop():- Removes the last elements of the array. Returns the removed element.
     Example:-
       const stack = [1,2,3];
       const removed = stack.pop();
       console.log(removed);
       consloe.log(stack);
       


   

