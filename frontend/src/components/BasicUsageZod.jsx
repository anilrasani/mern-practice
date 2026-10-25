import React from "react";
import * as z from 'zod';

// -- user validation by docs

// const User =z.object({
//     name:z.string(),
// });

// const user ={name:"jonny"};

// console.log(User.parse(user));

// // const data = User.parse(user);

// // console.log(data.user);

// player validation by own

const Player  = z.object({
    name:z.string().min(3),
    age:z.number().gt(1),
    sport:z.string().optional(),
    email:z.string().optional(),
})


const player = {
    name:'JOhnny',
    age : 25,
    sport : 'Cricket',
    email:'aanil@rasani.com'
}

console.log(Player.parse(player));



function BasicUsagezod (){
    return (
        <>
        <div>
            <p> Basic Usage ZOD</p>
            <h1> ZOD Validation </h1>

        </div>
        </>
    )
}

export default BasicUsagezod;