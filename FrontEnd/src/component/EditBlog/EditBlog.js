import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import { useParams, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import "./EditBlog.css";


const tags = [
    {
        value: "Technology",
        label: "Technology"
    },
    {
        value: "Business",
        label: "Business"
    },
    {
        value: "Science",
        label: "Science"
    },
    {
        value: "Health",
        label: "Health"
    },
    {
        value: "Travel",
        label: "Travel"
    }
];

function EditBlog() {
    const navigate = useNavigate();
    const id = useParams();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [tag, setTag] = useState("")
    
    
    console.log("Blog ID", id.blogId);
    
    useEffect(() => {
        async function getBlogInfo() {
            const API_url = `http://127.0.0.1:3000/myBlogInfo/${id.blogId}`;
            console.log(API_url, "APiiiiiiii");
            
            let response = await axios.get(API_url);
            console.log("response---->>>>", response.data);
            setTitle(response.data[0].title);
            setDesc(response.data[0].disciption);
            setTag(response.data[0].tag)
        }
        
        getBlogInfo();
    }, []);
    
    const titleHandler =(e) => setTitle(e.target.value);
    const descHandler = (e) => setDesc(e.target.value);
    const tagHandler = (e) => setTag(e.target.value)


    async function editFormHandler(event){
        event.preventDefault()
        let data = await axios.put(`http://localhost:3000/editMyBlog/${id.blogId}`,{title:title,disciption:desc,tag: tag})
        console.log("Response given by submit key",data.response);
        setTitle("");
        setDesc("");
        setTag("");
        navigate("/myblogs",{replace:true})

    } 

    console.log("title: " + title);
    console.log("desc: " + desc);
    
    return <>
        <Navbar/>
        <div className="editBlog">
            <h1 className="editBlog_title">Edit Your Blog</h1>
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" }
                }}
                noValidate
                autoComplete="off"
                >
                <div className="createBlog_form">
                    <div>
                        <TextField id="outlined-search" label="Title" type="search" value={title} onChange={titleHandler} />
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Select"
                            value={tag}
                            onChange={tagHandler}
                            helperText="Please select your tag"
                            >
                            {tags.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>

                    <TextField
                        id="outlined-multiline-static"
                        className="blog_desc"
                        label="Description"
                        multiline
                        rows={10}
                        value={desc}
                        onChange={descHandler}
                    />
                </div>
                <Button className="blog_btn" onClick={editFormHandler} variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Box>
        </div>
    </>
}


export default EditBlog;