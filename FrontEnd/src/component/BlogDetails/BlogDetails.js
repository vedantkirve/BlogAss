import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "../Navbar"
import MiniBlogList from "./MiniBlogList/MiniBlogList"
import { useParams, useNavigate } from "react-router-dom";
import "./BlogDetails.css"

function BlogDetails(){

    const id = useParams();

    const [blog, setBlog] = useState({});
    const [userInfo, setUserInfo] = useState([]);

    useEffect(()=>{
        async function getBlogInfo(){
            const API_url = `http://127.0.0.1:3000/myBlogInfo/${id.id}`;
            console.log(API_url, "APiiiiiiii");
            
            let response = await axios.get(API_url);
            
            const API_getUser = `http://127.0.0.1:3000/userInfo/${response.data[0].userId}`
            let userResponse = await axios.get(API_getUser)

            
            console.log("response---->>>>", response.data[0].title);

            console.log(userResponse.data);
            setUserInfo(userResponse.data)
            setBlog(response.data[0]);
        }
        // console.log();
        getBlogInfo();
    },[])
    return(
        <>
        <Navbar/>
        <div className="parent">
            <div className="blogBodyPartOne">  
                {/* <div>
                    
                    <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png" alt="Avatar" className="avatar"/>
                    
                    <span>Admin Name <p>12 jun 2022</p></span>
                    
                </div> */}
                <h2 className="blogTitle">{blog.title}</h2>
                <img className="blogImage" src={blog.imageUrl} alt="2"/>
                
              
                <div className="blogDescription">
                <p>{blog.description}</p>
                </div>
            </div>
            <div className="blogBodyPartTwo">
                
                <div className="BlogComponents">
                    <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png" alt="Avatar" className="avatar"/>
                    <p className="authurName">{blog.authorName}</p>
                    <div className="gmail-info">
                        
                        <i className="material-icons gmail-icon">
                            gmail
                        </i>
                        <span className="authur-gmail">{userInfo.email}</span>
                    </div>
                    
                </div>
                <hr></hr>
                <br></br>
                <p>Looking For More Blogs</p>

                <MiniBlogList/>
                <MiniBlogList/>
                <MiniBlogList/>

            </div>
        </div>
        </>

    )
}

export default BlogDetails