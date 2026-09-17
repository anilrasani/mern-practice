
import { useState } from 'react';
import './App.css'



const App = ()=> {

    const[counter,setCounter]=useState(0);

    function IncreaseCounter(){
        setCounter(counter+1);
    }
    
    return (
        <div>
            <h2>Employee App</h2>

            <form>
                <div>
                    <label>Name</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Phone</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Address</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Interests</label>
                    <input type="text" />
                </div>

                <div>
                    <label>App Used</label>
                    <input type="text" />
                </div>

                <button type="submit">
                    Save Employee
                </button>
            </form>
            <h1>Count :{counter}</h1>
            <button onClick={IncreaseCounter}>Increase</button>
        </div>
        
    );
}


export default App

