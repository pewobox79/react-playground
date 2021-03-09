import React, {useState} from "react"


function JitsiMeet() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        document.getElementById("user").innerHTML = `<div><h1>Welcome ${firstName}</h1><p>We have stored the following data of you:</p><p>${firstName}<br/>${lastName}<br/>${email}<br/>${password}</p></div>`
    }


    return (

        <div>
            <h1>this is the jitsimeet component</h1>
            <form>
                <input placeholder="First Name" type="text" value={firstName}
                       onChange={e => setFirstName(e.target.value)}/>
                <input placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
                <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input placeholder="password" type="password" value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <button onClick={handleSubmit}>Submit the data</button>
            </form>


            <div id="user"></div>
        </div>


    )
}

export default JitsiMeet