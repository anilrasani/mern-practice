
const express = require('express');   // require() returns the TOOLBOX (a function)
const app = express();                 // calling it () returns the actual APP instance

app.get('/',(req,res)=>{
res.send('Home')
})




app.listen(3000, () => {
    console.log('Server running on port 3000');

});

