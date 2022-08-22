import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import BlogList from "../BlogList/BlogList";
import CreateBlogIcon from "../CreateBlog/CreateBlogIcon";
import axios from "axios";

function Business() {
    const API_url = "http://127.0.0.1:3000/blogsWithParticularTag/Business";
    const [blogList, setBlogList] = useState([])


    useEffect(() => {
        async function getBlogList() {
            let data = await axios.get(API_url)
            console.log("All Blogs-----", data)
            setBlogList(data.data)
            // console.log(data);
        }


        getBlogList()

    }, [])

    return <>
        <Navbar name="business" />
        <CreateBlogIcon/>
        {blogList.map((Blog)=>{
            return <BlogList id ={Blog.id} name={Blog.authorName} title={Blog.title} imgURL={Blog.imageUrl} description={Blog.description} tag={Blog.tags} date={Blog.dateTime}/>

        })}
    </>
}

export default Business;