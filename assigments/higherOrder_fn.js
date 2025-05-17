//Higher order function 
 // Takes a function as argument
  
 function calculate(a,b,operation){
    return operation(a,b);
 }
 function add(x,y){
    return x + y;
 }
 console.log(calculate(5,3,add));
 //Returns a function
 console.log("Returns a function example");
  function multiplier(factor){
    return function(num){
        return num * factor;
    };
  }
  const double = multiplier(2);
  console.log(double(5));