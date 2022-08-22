import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import BlogList from "../BlogList/BlogList";
import NoBlog from "../NoBlog/NoBlog";
import MyBlogList from "./MyBlogList"
import CreateBlogIcon from "../CreateBlog/CreateBlogIcon";
import axios from "axios";

function MyBlogs() {

    const [myblogs, setMyBlogs] = useState([]);

    useEffect(()=>{
        async function getMyBlogs() {
            let userId = localStorage.getItem("userID")
            let response = await axios.get("http://127.0.0.1:3000/myBlogs/"+userId,)
            setMyBlogs(response.data)
            console.log(response)
        }
        getMyBlogs()

    },[])

    return <>
        <Navbar name="myblog" />
        <CreateBlogIcon/>

        {myblogs.length === 0 ? 
            <NoBlog/>
            :
            myblogs.map((blog) =>{
                return  <MyBlogList id={blog.id} title={blog.title} name={blog.authorName} description={blog.description} tag={blog.tags} date={blog.dateTime}/>
            })
        }
    </>
}

export default MyBlogs;
