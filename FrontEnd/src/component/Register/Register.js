import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";


import "./Register.css"

function Register(props){

    const API_url = "http://127.0.0.1:3000/profile";
    const navigate = useNavigate();

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const [disable, setDisable] = useState(true);
    const [passCheck, setPassCheck] = useState()

    const fnameHandler =(event) => setFName(event.target.value)
    const lnameHandler =(event) => setLName(event.target.value)
    const emailHandler =(event) => setEmail(event.target.value)
    const passwordHandler =(event) => setPassword(event.target.value)
    const cpasswordHandler =(event) => {

        if(event.target.value === password){
            setDisable(false);
            setPassCheck(false);
        }else {
            setDisable(true);
            setPassCheck(true);
        }
        setCPassword(event.target.value)
    }

    const formHandler =async (event)=>{
        event.preventDefault();

        console.log("form submitted")
        // console.log(fname,lname, email, password, cpassword)

        let data ={
            firstName: fname,
            lastName: lname,
            email: email,
            password: password
        }
        setFName(""); setLName(""); setEmail(""); setPassword(""); setCPassword("")

        let response = await axios.post(API_url,data)
        if(response.status === 200){
            navigate("/", {replace:true})
        }else{

        }
        console.log("Responses---------",response.status)

        // props.getData(data);
    }    

    return <>   
        <div className="input-div">
            <h1>Register</h1>

            <form className="input-form" onSubmit={formHandler}>
                <input type="text" placeholder="First Name" onChange={fnameHandler} value={fname}/>
                <input type="text" placeholder="Last Name" onChange={lnameHandler} value={lname}/>
                <input type="email" placeholder="Email" onChange={emailHandler} value={email}/>
                <input type="password" placeholder="Password" onChange={passwordHandler} value ={password}/>
                <input type="password" placeholder="Confirm Password" onChange={cpasswordHandler} value={cpassword}/>
                {passCheck? <p>wrong</p> : ""}

                <button type="submit" disabled={disable? true: false}>Submit</button>
                {/* <button type="submit">Submit</button> */}

            </form>
            <p>Already have<Link to="../login">account</Link></p>
        </div>
    </>
}

export default Register