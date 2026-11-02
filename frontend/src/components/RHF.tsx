import React from 'react';

import { useForm} from "react-hook-form";

type FormValues ={
    username : string
    email :string
    channel :string
}


export const RHF=()=> {
    
    const form = useForm<FormValues>();
    const {register,control,handleSubmit}= form;
    // const {name,ref,onChange,onBlur}=register('username')
    //  isntead of lenghty we can use in simple like spread operartors

    const onSubmit =(data :FormValues)=>{
        console.log('form  Submiited..!',data)
    }
    return (
    <div>
        <h1>RHF - React Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
             <h1>RHF </h1>
             
           {/* <label htmlFor="">Username</label><input type="text" id='username'  ref = {ref} name={name} onBlur={onBlur} onChange={onChange}/> <br/> */}
            <label htmlFor=""> Username</label><input type="text" id="username" {...register("username")} />    
           <label htmlFor=""> Email</label><input type="text"  id='email' {...register("email")}/> <br/>
           <label htmlFor="">Channel</label><input type="text" id='channel' {...register("channel")}/> <br/>
           <button type="submit"> Submit</button>
        </form>


    </div>
  )
}

export default RHF