import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import { useParams, useNavigate } from "react-router-dom";

import "./EditBlog.css";

function EditBlog() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const id = useParams();



    console.log("Blog ID", id.blogId);



    useEffect(() => {
        async function getBlogInfo() {
        const API_url = `http://127.0.0.1:3000/myBlogInfo/${id.blogId}`;
        console.log(API_url, "APiiiiiiii");

        let response = await axios.get(API_url);
        console.log("response---->>>>", response.data);
        setTitle(response.data[0].title);
        setDesc(response.data[0].disciption);
        }

        getBlogInfo();
    }, []);

    async function editFormHandler(event){
        event.preventDefault()
        let data = await axios.put(`http://localhost:3000/editMyBlog/${id.blogId}`,{title:title,disciption:desc})
        console.log("Response given by submit key",data.response);
        setTitle("");
        setDesc("");
        navigate("/myblogs",{replace:true})

    } 
    const titleHandler =(e) => setTitle(e.target.value);
    const descHandler = (e) => setDesc(e.target.value);

    console.log("title: " + title);
    console.log("desc: " + desc);
    
    return <>
        <Navbar/>
        <div className="editBlog">
            <h1 className="editBlog_title">Edit Your Blog</h1>
            <form className="editBlog_form" onSubmit={editFormHandler}>
                <input className="editBlog_title" placeholder="title" onChange={titleHandler} value={title}/>
                <textarea className="editBlog_desc" rows="10" cols="100" placeholder="Write blog" onChange={descHandler} value={desc}/>
                <button className="editBlog_btn">Submit</button>
            </form>
        </div>
    </>
}


export default EditBlog;