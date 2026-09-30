import React, { useState } from "react";

const Form=(props)=>{
    const {data}=props;
    const [username,setUsername] = useState('');
    return(
        <div className="">
            <div>
                <h1> Form Handling </h1>
            </div>
            <div>
                <form>
                    <label >UserName</label>
                    <input type="text" value={username}/>
                </form>
            </div>
        </div>
    )
}

export default Form;