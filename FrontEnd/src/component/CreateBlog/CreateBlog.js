import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import axios from "axios";

import Navbar from "../Navbar";

import "./CreateBlog.css"


function CreateBlog(){

    // const date = new Date();
    const API_url = "http://127.0.0.1:3000/createBlog"
    const navigate = useNavigate();


    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    const titleHandler =(e) => setTitle(e.target.value)
    const descHandler = (e) => setDesc(e.target.value);

    // async function getUserId(){
    //     const userId = await axios.get("")

    // }

    const blogHandler =async(e) =>{
        e.preventDefault();

        let blog = {
            title: title,
            discription: desc,
            authorName: "Vedant",
            userId:5,
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString()
        }

        let response = await axios.post(API_url,blog)
        if(response.status === 200){
            navigate("/", {replace:true})
        }else{

        }
        console.log("Responses---------",response)
        console.log(blog);
    }

    return <>
        <Navbar/>
        <div className="createBlog">
            <h1>Create A Blog</h1>
            <form className="createBlog_form" onSubmit={blogHandler}>
                <input className="blog_title" placeholder="title" onChange={titleHandler} value={title} required/>
                <textarea className="blog_desc" rows="10" cols="100" placeholder="Write blog" onChange={descHandler} value={desc} required/>
                <button className="blog_btn">Submit</button>
            </form>
        </div>
    </>
}

export default CreateBlog;