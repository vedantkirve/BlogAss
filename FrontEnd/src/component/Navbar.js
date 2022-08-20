import { Link } from "react-router-dom";
import img from "./image/user.jpeg"

import "./Navbar.css"

function Navbar(){
    return <>
        <div className="navbar">
            <div className="navbar_top">
                <div className="navbar_title">BLOG WORLD</div>
                <img className="profile_pic" src={img} alt="iMAGE"/>
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