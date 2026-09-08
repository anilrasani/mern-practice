// -- variables & declaration


const nam = 'anil';
let age = 25;
const location = "Tirupati"
// mood = 'tired'

let name1 = 'Anil';
var age1 = 25;
const location1 = 'Tirupati';


console.log(name1);
// console.log(nam);
 
// console.log(age);
console.log(age1);

// console.log(location1);
console.log(location);

console.log(nam,age,location);


// mood = 'something interesting'
// console.log(mood);

const  city  = 'bengaluru';
let mood = 'Focused';
console.log(city);
console.log(mood);

mood = 'tired';
console.log(mood);

// -- Functions

function greet (nam){
    console.log('Hello'+nam);
    
}

greet ('Anil');


function add (a,b){
    console.log(a+b);
    
}

add(5,3);
add(10,20);



// -- 3 Arrow Functions

console.log('--- add & mul');

const add1 = (a,b)=>{
    console.log(a+b);
    
}

const mul = (a,b)=>{
    console.log(a*b);
    
}

add1(5,4);
mul(5,5);

console.log('--- sub & div');

const sub = (a,b)=>{
    console.log(a-b);
}

const div = (a,b)=>{
console.log(a/b);

}

sub(120,60);
div(10,2);

//  Array + map

const numbers = [1,2,3,4,5,6]

console.log(numbers);
console.log(numbers.length);

const double = numbers.map((n)=>n*2);
console.log(double);

const nums = [2,4,6,8,10]
console.log(nums);
console.log(nums.length);

const double1 = nums.map(
    (n)=>n*2
)

console.log(double1);

const num = [1,3,5,7,9]

console.log(num);
console.log(num.length);

const triple = num.map(
    (m)=>m*3
)

console.log(triple);

console.log(num);
console.log(numbers);
console.log(nums)  ;




const data =[
         3,
        436,
         9123456780,
         43643,
         564
         ]

const d = data.map(
    (d1)=>d1 +0
)

console.log(d);



const dta = [
        3,
        "Kiran",
        "9123456780",
         "Bangalore",
         "Music",
         "YouTube"
 ]
     
 const d2 =dta.map(
    (m)=>m
 )
 console.log(d2);
 