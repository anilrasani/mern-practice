import React, { useState } from "react";
import "./main.jsx"


const Greet= (props)=>{
    const {name,people} = props;
    
    return(
        <div className="">
            <div>
                <h1> Hello {props.name}</h1>
                <h1 className="text-3xl font-bold text-purple-600">Hello Tailwind</h1>
            
            </div>
            <div className="justify-center" >
                <table>
                <thead>
                    <tr>
                       <th>id</th>        
                        <th>name</th>        
                        <th>age</th>        
                        <th>skill</th>        
                    </tr>
                </thead>
                
                <tbody>
                    {people.map((person)=>(
                    <tr key ={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.skill}</td>
                    </tr>    
                    ))}
                </tbody>
            </table>
            <div>
                <button>
                    Submit
                </button>
            </div>
            </div>
        </div>
             
        
    )
}

export default Greet;

// shortcut method or simple way to write function

// Greet.jsx
// export const Greet = (props) => <h1>Hello {props.name}</h1>;

    
    
