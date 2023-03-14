import React from 'react';
// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <label>Password: </label>
            <input onChange={()=>console.log(`Entering password...`)} type="password" placeholder='Password'/>
        </div>
    )
}

export default Keypad;