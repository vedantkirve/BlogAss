import { Link, useNavigate } from "react-router-dom";

import UserProfile from "./UserProfile";
// import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

import "./Navbar.css"
import { useState } from "react";

function Navbar(props) {
    const navigate = useNavigate();
    const [sec, setSec] = useState({
        explore: false,
        business: false,
        health: false,
        science: false,
        technology: false,
        trave: false
    })

    if (props.name === "ex") {
        setSec({
            explore: true,
            business: false,
            health: false,
            science: false,
            technology: false,
            trave: false
        })
    }

    const ExpHandler = () => {
        navigate("/home", { replace: true })
    }

    const TechHandler = () =>  navigate("/technology", { replace: true })
    const BussHandler = () =>  navigate("/business", { replace: true })
    const SciHandler = () =>  navigate("/science", { replace: true })
    const HealthHandler = () =>  navigate("/health", { replace: true })
    const TravelHandler = () =>  navigate("/travel", { replace: true })
    const myBlogHandler = () =>  navigate("/myblogs", { replace: true })


    return <>
        <div className="navbar">
            <div className="navbar_top">
                <div className="navbar_title">BLOG WORLD</div>
                {/* <AccountCircleSharpIcon fontSize="large"/> */}
                <UserProfile />
            </div>

            <div className="navbar-content">
                {/* <Link to="/createblog">Create Blog</Link> */}
                <p onClick={ExpHandler} className={`${props.name === "explore" ? "thisSec" : ""}`}>Explore</p>
                <p onClick={TechHandler} className={`${props.name === "technology" ? "thisSec" : ""}`}>Technology</p>
                <p onClick={BussHandler} className={`${props.name === "business" ? "thisSec" : ""}`}>Business</p>
                <p onClick={SciHandler} className={`${props.name === "science" ? "thisSec" : ""}`}>Science</p>
                <p onClick={HealthHandler} className={`${props.name === "health" ? "thisSec" : ""}`}>Health</p>
                <p onClick={TravelHandler} className={`${props.name === "travel" ? "thisSec" : ""}`}>Travel</p>

                <p onClick={myBlogHandler} className={`${props.name === "myblog" ? "thisSec" : ""}`}>My Blogs</p>
            </div>

        </div>
    </>
}

export default Navbar