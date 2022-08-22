import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import HttpsIcon from '@mui/icons-material/Https';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import "./Register.css"


function Register(props) {

    const API_checkUser = "http://127.0.0.1:3000/userId"
    const API_url = "http://127.0.0.1:3000/profile";
    
    const navigate = useNavigate();

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const [disable, setDisable] = useState(true);
    const [passCheck, setPassCheck] = useState()



    const fnameHandler = (event) => setFName(event.target.value)
    const lnameHandler = (event) => setLName(event.target.value)
    const emailHandler = (event) => setEmail(event.target.value)
    const passwordHandler = (event) => setPassword(event.target.value)

    const cpasswordHandler = (event) => {

        if (event.target.value === password) {
            setDisable(false);
            setPassCheck(false);
        } else {
            setDisable(true);
            setPassCheck(true);
        }
        setCPassword(event.target.value)
    }



    const formHandler = async (event) => {
        event.preventDefault();

        console.log("form submitted")

        let data = {
            firstName: fname,
            lastName: lname,
            email: email,
            password: password
        }

        setDisable(true);
        setFName(""); setLName(""); setEmail(""); setPassword(""); setCPassword("");
        console.log(data);

        let checkUser = await axios.post(API_checkUser, {email:email, password: password});

        console.log(checkUser.data);

        if(checkUser.data === "NoUser"){
            let response = await axios.post(API_url,data)
            if(response.status === 200){
                navigate("/")
            }else{
    
            }
            console.log("Responses---------",response.status)
        }else{
            alert("User exit");
            navigate("/");
        }

        // props.getData(data);
    }

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const [cvalues, setCValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleClickShowPassword1 = () => {
        setCValues({
            ...cvalues,
            showPassword: !cvalues.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const switchLogin = () => navigate("/", {replace: true})

    return (
        <div className="reg_parent">
            <div className="input-div">
                <div className="signupform">

                    <div className="reg">
                        <img className="signupImage" src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="signup Image"></img>
                        <p onClick={switchLogin} className="switchLogin">Have already an account? Login here</p>
                        {/* <a href="#" class="loginLink">I am already member</a> */}
                    </div>

                    <div className="signupFormContent">
                        <h1>Register</h1>

                        <Box className="regInput" sx={{ '& > :not(style)': { m: 1 } }}>
                            {/* fname */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', width: "17.5rem", marginBottom:"1rem !important" }}>
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="First Name" variant="standard" value={fname} onChange={fnameHandler} required/>
                            </Box>

                            {/* lname */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', width: "17.5rem", marginBottom:"1rem !important" }}>
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Last Name" variant="standard" value={lname} onChange={lnameHandler} required/>
                            </Box>

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
                            
                            {/* confirm password */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>

                                <HttpsIcon sx={{ color: 'action.active', mr: 0.5, my: 1.5 }} />
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>

                                    <Input
                                        error ={passCheck? true: false}
                                        id="standard-adornment-password"
                                        className="pass1"
                                        type={cvalues.showPassword ? 'text' : 'password'}
                                        value={cpassword}
                                        onChange={cpasswordHandler}
                                        required
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword1}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {cvalues.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>
                            {passCheck?
                                <div className="passwordMatch">
                                    <ErrorOutlineIcon fontSize="small"/>
                                    <p>Password Mismatch</p>
                                </div>
                            :
                                "" }

                            <button
                                type="submit"
                                className="regBtn"
                                onClick={formHandler}
                                disabled={disable ? true : false}
                            >Submit</button>



                        </Box>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Register