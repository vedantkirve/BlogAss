import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';

import "../BlogList/BlogList.css"

function MyBlogList(props){

    const navigate = useNavigate();
    

    const editHandler =(event)=>{
        console.log("edit");
        console.log(event.target.id);
        let blogID = event.target.id[0];
        navigate(`/editBlog/${blogID}`)
        console.log(blogID);
    }

    const deleteHandler = async (event) =>{
        console.log("delete");
        console.log(event.target.id)
        let blogID = event.target.id[0];
        const API_url =`http://127.0.0.1:3000/deleteMyBlog/${blogID}`;
        let response = await axios.get(API_url)
        console.log("deleteInfo",response.data)
        
        if(response.data === 1){
            alert("deleted");
            for(let i=1;i<=1;i++){
                window.location.reload();
            }
        }
    }

    const openBlog = ()=>{
        // let blogID = event.target.id;
        let blogID = props.id;
        navigate(`/blogDetail/${blogID}`)
        console.log(blogID);

    }

    // useEffect(()=>{
    //     // window.location.reload();
    //     console.log("deleted the posts");
    //     navigate("/myblogs",{replace:true})

    // },[deletedBlog])    

    let des = props.description;

    return <>
        <div className="bloglist" >
            <div className="bloglist_info">
                <div onClick={openBlog}>
                    <div className="bloglist_top">
                        <span className="date">
                            {/* <p className="date">Aug 15, 2022</p> */}
                            <p className="date">{props.date}</p>

                        </span>
                        <p>·</p>
                        <p className="name">{props.name}</p>
                    </div>
                    <h1 className="title">{props.title}</h1>
                    {/* <p className="desc">{props.description}</p> */}
                    <p className="desc">{des.substr(0,170)} </p>
                    <a className="readMore">[.....]</a>
                </div>
                <div className="bloglist_bottom">
                    <div className="tag">{props.tag}</div>
                    <Stack direction="row" spacing={2} className="btn">
                        <Tooltip title="Edit"  onClick={editHandler}>
                            <IconButton>
                                <EditIcon id ={`${props.id}edit`}/>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete"  onClick={deleteHandler}>
                            <IconButton>
                                <DeleteIcon id ={`${props.id}delete`}/>
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </div>
            </div>

            <div>
                <img src="https://picsum.photos/300/200" alt="1"/>
            </div>
        </div>
    </>
}

export default MyBlogList