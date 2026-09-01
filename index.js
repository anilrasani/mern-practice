
const express = require('express');   // require() returns the TOOLBOX (a function)
const app = express();                 // calling it () returns the actual APP instance

app.get('/',(req,res)=>{
res.send('Home')
})



const user  = {
    name:'Anil',
    age :25,
    city : 'Tirupati'
}

// const{name,location}=user
// console.log(name);
// console.log(location);

const {city:location } =user
console.log(location);


app.listen(3000, () => {
    console.log('Server running on port 3000');

});

