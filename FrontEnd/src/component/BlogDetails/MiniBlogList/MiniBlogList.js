import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";


import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

import "./MiniBlogList.css"

function MiniBlogList(props){

    const navigate = useNavigate();

    const openBlog = ()=>{
        // let blogID = event.target.id;
        let blogID = props.id;
        console.log(blogID);
        navigate(`/blogDetail/${blogID}`)
        for(let i=1;i<=1;i++){
            window.location.reload();
        }
    }

    return(
        <div className="moreBlog">
            
            <div onClick={openBlog} className="miniBlogList">
                <div className="miniBlogList_Info">
                    <div className='miniBlogList_user'>
                        <AccountCircleRoundedIcon fontSize='small'/>
                        <p className="miniBlogName">{props.name}</p>
                    </div>
                    <h3 className="miniBlogTitle" >{props.title}</h3>
                    {/* <p>Aug 15</p> */}
                </div>
                <div>
                    <img  className= "miniBlogImage"src={props.imgURL} alt="1"/>
                </div>
            </div>
        </div>
    );
}

export default MiniBlogList