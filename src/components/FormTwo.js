import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import "../css/FormTwo.css"

function FormTwo (){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function submit(e){
        e.preventDefault()
        document.getElementById("result").innerHTML = `<p>Email: ${email}</p> <p>password: ${password}</p>`
    }
    return(
        <div id="wrapper">
        <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} />
            </Form.Group>
            <Button onClick={submit}>Submit</Button>
        </Form>
<br/>
            <div className="resultarea">
                <h2>Please check your data: <p id="result"></p></h2>

            </div>
        </div>
    )

}
export default FormTwo