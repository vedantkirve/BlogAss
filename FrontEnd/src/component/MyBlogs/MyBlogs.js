import Navbar from "../Navbar"
import MyBlogList from "./MyBlogList"
import { useState, useEffect } from "react";
import axios from "axios";



function MyBlogs(){


    const [myblogs,setMyBlogs] = useState([]);

    useEffect(()=>{
        async function getMyBlogs() {
            // let userId = localStorage.getItem("userId")
            let response = await axios.get("http://127.0.0.1:3000/myBlogs/1",)
            setMyBlogs(response.data)
            console.log(response)
        }
        getMyBlogs()

    },[])


    return <>
        <Navbar/>
        {/* <Modal onOpen={modal}/> */}
        {myblogs.map((blog) =>{
            return  <MyBlogList id={blog.id} title={blog.title} name={blog.authorName} discription={blog.disciption}/>
       
         
        })}
        {/* <MyBlogList id="1" title="Web3.0" name="Shubahm" discription="asd"/> */}
    </>
}




export default MyBlogs