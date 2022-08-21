import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import BlogList from "../BlogList/BlogList";
import CreateBlogIcon from "../CreateBlog/CreateBlogIcon";
import axios from "axios";

function Business() {
    const API_url = "http://127.0.0.1:3000/";
    const [blogList, setBlogList] = useState([])


    useEffect(() => {
        async function getBlogList() {
            let data = await axios.get()
            console.log("All Blogs-----", data.data)
            setBlogList(data.data)
        }


        getBlogList()

    }, [])

    return <>
        <Navbar name="business" />
        <CreateBlogIcon/>

        <BlogList />
        {/* {blogList.map((Blog) => {
            return <BlogList id={Blog.blogid} name={Blog.authorName} title={Blog.title} discription={Blog.disciption} />

        })} */}
    </>
}

export default Business;