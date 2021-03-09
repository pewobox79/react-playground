import React, {useState} from 'react';

function Form() {
    const [firstName, setFirstName] =useState("")
    const [lastName, setLastName] =useState("")


    function change (e){
        setLastName(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        document.getElementById("output").innerHTML = `<p>First Name: ${firstName} <br/>`  + ` Last Name ${lastName}</p>`

    }

    return (
        <>
        <form>
            <input name="firstName" placeholder="firstName" value={firstName} onChange={e=> setFirstName(e.target.value)}/>
            <input name="lastName" placeholder="last Name" value={lastName} onChange={e=> setLastName(e.target.value)}/>

            <button onClick={e => onSubmit(e)}>Submit</button>
        </form>
<div id="output"></div>
        </>
    )
};


export default Form;