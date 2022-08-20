import { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";


import "./Login.css"

function Login(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler =(event) => setEmail(event.target.value)
    const passwordHandler =(event) => setPassword(event.target.value)

    const formHandler =async(event)=>{
        event.preventDefault();

        console.log("form submitted")
        // console.log(fname,lname, email, password, cpassword

        let data ={
            email: email,
            password: password
        }
        setEmail("");
        setPassword("");

        let userID = await axios.post("http://127.0.0.1:3000/userId", data)

        console.log(userID.data[0]);
        localStorage.setItem("userID", userID.data[0].id);
        localStorage.setItem("authorName", userID.data[0].firstName+" "+userID.data[0].lastName);
        
        props.getData(data);
    }    

    return <>   
        <div className="input-div">
            <h1>Login</h1>

            <form className="input-form" onSubmit={formHandler}>
                <input type="email" placeholder="Email" onChange={emailHandler} value={email}/>
                <input type="password" placeholder="Password" onChange={passwordHandler} value ={password}/>

                <button type="submit" disabled={!password}>Submit</button>

            </form>
            {/* <p>Don't have<Link to="login">account</Link></p> */}
        </div>
    </>
}

export default Login