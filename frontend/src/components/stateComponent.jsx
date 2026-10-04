import React, { useState } from "react";
import { useEffect } from "react";

function StateComponent() {

const [vidoeName,setvideoName]=useState('NodeJS');   
const[count,setCount] = useState(95);
const[postCompliment,setpostCompliment] = useState('')
    
let videos = ['react','nodejs','js','jsx'];

useEffect(()=>{
    console.log('Component Rendering  Using Use Effect');
    
},[])

useEffect(()=>{
    console.log('Likes are updated');
   
},[count])

    return(
        <>
            <div>
                <h1> use state component</h1>
            </div>
            <div>
                {videos.map((video,index)=>{
                   return <li key={index}>{video}-{index}</li>
                })}
            </div>
            <div>
                <h1>VideoName:{vidoeName}</h1>
                <h2>Instagram Post</h2>

                <>
                <h1>New post  </h1>
                <button onClick={()=>{setCount(count+1)}}>Likes : {count}</button>  <></>
                <button onClick={()=>{setCount(count-1)}}>DisLikes </button>

                </>
                <>
                <p> Conditional Rendering</p>
{/* 
                {
                    count>=100 && <p>people lving the post</p>
                } */}

                {
                    count<100?<p>people liking the post.</p>:<p>Yaayy ...!people lving the post</p>
                }
                </>
            </div>
                <>
                <div className="">

                    {/* { count >=100 &&

                    <form action=''>
                        <label htmlFor="post-compliment">Post Compliment</label>    
                        <input type="text" name="post-compliment" value={postCompliment}
                        onChange={(e)=>{
                            console.log(e.target.value);
                            setpostCompliment(e.target.value)
                        }}
                        />
                        
                    </form>
                    } */}

                    {
                        count <100?<button onClick={()=>{setCount(count+1)}}>Likes : {count}</button> : <form action=''>
                        <label htmlFor="post-compliment">Post Compliment</label>    
                        <input type="text" name="post-compliment" value={postCompliment}
                        onChange={(e)=>{
                            console.log(e.target.value);
                            setpostCompliment(e.target.value)
                        }}
                        
                        />
                        
                        
                        
                    </form>
                    }
                </div>
                </>


        </>
        
    )
}

export default StateComponent;

