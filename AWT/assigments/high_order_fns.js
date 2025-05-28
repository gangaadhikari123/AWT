//filter()
const numbers=[1,2,3,4,5];
const even = numbers.filter(num => num % 2==0);
console.log(even);

//map()
const nums = [1,2,3];
const squared = nums.map(n => n*n);
console.log(squared);

//forEach()
const fruits = ["apple", "banana" ,"cherry"];
fruits.forEach(fruit => {
    console.log(fruit.toUpperCase());
});

//push()
const animals=["cat","dog"];
animals.push("rabbit");
console.log(animals);

//pop()
const stack = [1,2,3];
const removed = stack.pop();
console.log(removed);
console.log(stack);
