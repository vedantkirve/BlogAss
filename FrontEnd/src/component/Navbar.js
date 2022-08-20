import { Link } from "react-router-dom";

import UserProfile from "./UserProfile";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

import "./Navbar.css"

function Navbar(){
    return <>
        <div className="navbar">
            <div className="navbar_top">
                <div className="navbar_title">BLOG WORLD</div>
                {/* <AccountCircleSharpIcon fontSize="large"/> */}
                <UserProfile />
            </div>

            <div className="navbar-content">
                {/* <Link to="/createblog">Create Blog</Link> */}
                <p>Explore</p>
                <p>Technology</p>
                <p>Business</p>
                <p>Science</p>
                <p>Health</p>
                <p>Travel</p>

                <p>My Blogs</p>
            </div>

        </div>
    </>
}

export default Navbar