import React, { useState } from "react";
import z from "zod";

const Loginform = z.object({
    Username :z.string().min(4),
    Age:z.number.min(1),
    Sport:z.string(),
});

const user = {
    Username:{setUsername},
    Age:{setAge},
    Sport : {setSport},
}

const data = Loginform.safeParse(user);

console.log(data.Username);
console.log(data.Age);
console.log(data.Sport);

function LoginForm(){
    
    const [Username,setUsername]=useState('');
    const [Age,setAge]=useState();
    const [Sport,setSport]=useState('');
     return (
        <>
            <div>
                <h1> Log In Form</h1>
                <form action='' >
                <label htmlFor="Username">User name :  </label>
                <input type="text"  
                value={Username}
                onChange={
                    (e)=>{
                        console.log(e.target.value);
                        setUsername(e.target.value)
                    }
                    }
                    />
                

                
                    <label> Age  : </label>
                    <input type = 'number'
                    value={Age}
                    onChange={
                        (e)=>{
                            setAge(e.target.value);
                            console.log(e.target.value);
                            
                        }
                    }
                    />
                
                    <label>Sport :</label>
                    <input type = 'text'
                    value={Sport}
                    onChange={
                        (e)=>{
                            setSport(e.target.value)
                            console.log(e.target.value);
                            
                        }
                    }
                    />
                    <br></br>

                <button type="submit">Submit</button>
                
                </form>

            </div>

        </>
     )
        
     
}
export default LoginForm;