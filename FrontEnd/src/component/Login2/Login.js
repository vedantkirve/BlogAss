import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import HttpsIcon from '@mui/icons-material/Https';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';


import "./Login.css"

function Login(props) {
    const API_url = "http://127.0.0.1:3000/profile"
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const emailHandler = (event) => setEmail(event.target.value)
    const passwordHandler = (event) => setPassword(event.target.value)


    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const switchReg =() => navigate("/register" ,{replace:true})

    const formHandler = async (event) => {
        event.preventDefault();

        console.log("form submitted")
        // console.log(fname,lname, email, password, cpassword

        let data = {
            email: email,
            password: password
        }
        setEmail("");
        setPassword("");

        let userID = await axios.post("http://127.0.0.1:3000/userId", data)

        console.log(userID.data[0]);
        localStorage.setItem("userID", userID.data[0].id);
        localStorage.setItem("authorName", userID.data[0].firstName + " " + userID.data[0].lastName);
        // props.getData(data);
    }

    return <>
        <div className="input-div">


            <div className="loginContent">

                <div className="log">
                    <img className="loginImage" src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" alt="login Image"></img>
                    {/* <a className="signupLink" >Create an account</a> */}

                </div>

                <div className="loginForm">
                    <h1 className="formTitle">LogIn</h1>


                    <Box className="regInput" sx={{ '& > :not(style)': { m: 1 } }}>

                        {/* email */}
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: "17.5rem" }}>
                            <AlternateEmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Email Id" variant="standard" value={email} onChange={emailHandler} required/>
                        </Box>

                        {/* password */}
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <HttpsIcon sx={{ color: 'action.active', mr: 0.5, my: 1.5 }} />
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>

                                <Input
                                    id="standard-adornment-password"
                                    className="pass1"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={passwordHandler}
                                    required
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Box>

                        <button
                            type="submit"
                            className="logBtn"
                            onClick={formHandler}
                        >LogIn</button>

                    <p onClick={switchReg} className="switchLogin">Not a Member? Register Now</p>

                    </Box>
                </div>
            </div>

            {/* <p>Don't have<Link to="login">account</Link></p> */}
        </div>
    </>
}

export default Login