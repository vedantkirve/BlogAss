
import "../BlogList/BlogList.css"
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";




function MyBlogList(props){

    const navigate = useNavigate();
    

    const editHandler =(event)=>{
        let blogID = event.target.id;
        navigate(`/editBlog/${blogID}`, {replace:true})
        console.log("edit");
        console.log(blogID);
    }

    const deleteHandler = async (event) =>{
        console.log("delete");
        let blogID = event.target.id;
        const API_url =`http://127.0.0.1:3000/deleteMyBlog/${blogID}`;
        let response = await axios.get(API_url)
        console.log("deleteInfo",response.data)
        
        for(let i=1;i<=1;i++){
            window.location.reload();

        }
        
        
    }

    // useEffect(()=>{
    //     // window.location.reload();
    //     console.log("deleted the posts");
    //     navigate("/myblogs",{replace:true})

    // },[deletedBlog])    

    return <>
        <div className="bloglist">
            <div className="bloglist_info">
                <p className="name">{props.name}</p>
                <h1 className="title">{props.title}</h1>
                <p className="desc">{props.discription}</p>
                <p>Aug 15</p>

                <div className="btn">
                    <button id ={props.id} onClick={editHandler}>Edit</button>
                    <button id ={props.id} onClick={deleteHandler}>Delete</button>
                </div>
                
            </div>
            <div>
                <img src="https://picsum.photos/300/200" alt="1"/>
            </div>
        </div>
    </>
}

export default MyBlogList