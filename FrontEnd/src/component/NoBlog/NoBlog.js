import { useParams, useNavigate } from "react-router-dom";

import "./NoBlog.css"

function NoBlog(){
    const navigate = useNavigate();

    const createBlog =()=>{
        console.log("clicked")
        navigate("/createBlog");
    }

    return(
        <div className="body" >
            <div>
                <div>
                    <img className="noBlogImage" src="https://pic.onlinewebfonts.com/svg/img_278242.png" alt="No blog picture"></img>
                </div>
                <p className="noBlogTitle">No Blogs Yet</p>
                <button onClick={createBlog} className="createButton">Create New Blog</button>
            </div>
        </div>
    )
}

export default NoBlog