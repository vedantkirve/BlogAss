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
                <div className="bloglist_top">
                    <span className="date">
                        <p className="date">Aug 15, 2022</p>
                    </span>
                    <p>·</p>
                    <p className="name">{props.name}</p>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="desc">{props.discription}</p>
                
                <div className="bloglist_bottom">
                    <div className="tag">Technology</div>
                    <Stack direction="row" spacing={2} className="btn">
                        <Tooltip title="Edit" id ={props.id} onClick={editHandler}>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete" id ={props.id} onClick={deleteHandler}>
                            <IconButton>
                                <DeleteIcon />
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