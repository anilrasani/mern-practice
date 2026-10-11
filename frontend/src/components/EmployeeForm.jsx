import React, { useState } from 'react';



function EmployeeForm() {
    const[Count,setCount] =useState(0);
    const[postCompliment,setpostCompliment]=useState('')
  return (<div>EmployeeForm
           <p>Emp Form with button and use state </p>
            <div>
                <h1> Instagram post</h1>
                <button onClick={()=>{setCount(Count+1)}}> Likes:{Count}</button> <></>
                <button onClick={()=>{setCount(Count-1)}}> DisLikes</button>
                
            </div>
            <div>
                <form action=''>
                    <label htmlFor='Post'>Post </label>
                    <input
                        type='text' 
                        value={postCompliment}
                        // name='Post'
                        onChange={
                            (e)=>{
                                console.log(e.target.value);
                                setpostCompliment(e.target.value)
                            }
                        }
                        
                        
                    />
                </form>
            </div>
        </div>
    
  )
}

export default EmployeeForm