import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import BlogList from "../BlogList/BlogList";
import CreateBlogIcon from "../CreateBlog/CreateBlogIcon";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

function Travel() {
    const API_url = "http://127.0.0.1:3000/blogsWithParticularTag/Travel";
    const [blogList, setBlogList] = useState([])

    const [log, setLog] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        async function getBlogList() {
            let data = await axios.get(API_url)
            console.log("All Blogs-----", data.data)
            setBlogList(data.data)

            if(localStorage.getItem("userID") === null){
                setLog(false);
              }else{
                setLog(true);
              }
        }


        getBlogList()

    }, [])

    return <>
    {log?
        <div>
            <Navbar name="travel"/>
            <CreateBlogIcon/>
            {blogList.map((Blog)=>{
                return <BlogList id ={Blog.id} name={Blog.authorName} title={Blog.title} imgURL={Blog.imageUrl} description={Blog.description} tag={Blog.tags} date={Blog.dateTime}/>
        
            })}
        </div>
    :
        navigate("/")
    }
    </>
}

export default Travel;