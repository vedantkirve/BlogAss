import { useState } from "react";
import Navbar from "../Navbar";
import BlogList from "../BlogList/BlogList";
import MyBlogList from "./MyBlogList"
import CreateBlogIcon from "../CreateBlog/CreateBlogIcon";
import axios from "axios";

function MyBlogs() {

    const [myblogs, setMyBlogs] = useState([]);

    // useEffect(()=>{
    //     async function getMyBlogs() {
    //         // let userId = localStorage.getItem("userId")
    //         let response = await axios.get("http://127.0.0.1:3000/myBlogs/1",)
    //         setMyBlogs(response.data)
    //         console.log(response)
    //     }
    //     getMyBlogs()

    // },[])

    return <>
        <Navbar />
        <CreateBlogIcon/>

        <BlogList />
        {/* {myblogs.map((blog) =>{
            return  <MyBlogList id={blog.id} title={blog.title} name={blog.authorName} discription={blog.disciption}/>
        })} */}
        <MyBlogList id="1" title="Web3.0" name="Shubham" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in." />
    </>
}

export default MyBlogs;
