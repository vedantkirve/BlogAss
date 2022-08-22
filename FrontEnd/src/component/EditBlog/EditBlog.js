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
    const [imgURL, setImgURL] = useState("")
    
    
    console.log("Blog ID", id.id);
    
    useEffect(() => {
        async function getBlogInfo() {
            const API_url = `http://127.0.0.1:3000/myBlogInfo/${id.id}`;
            console.log(API_url, "APiiiiiiii");
            
            let response = await axios.get(API_url);
            console.log("response---->>>>", response.data);
            setTitle(response.data[0].title);
            setDesc(response.data[0].description);
            setTag(response.data[0].tags)
            setImgURL(response.data[0].imageUrl);
        }
        
        getBlogInfo();
    }, []);
    
    const titleHandler =(e) => setTitle(e.target.value);
    const descHandler = (e) => setDesc(e.target.value);
    const tagHandler = (e) => setTag(e.target.value)
    const imgURLHandler  = (e) => setImgURL(e.target.value);


    async function editFormHandler(event){
        event.preventDefault()
        let newData = {
            title: title,
            description: desc,
            tags: tag,
            imageUrl: imgURL
        }
        let data = await axios.put(`http://localhost:3000/editMyBlog/${id.id}`,newData)
        console.log("Response given by submit key",data.response);
        setTitle("");
        setDesc("");
        setTag("");
        navigate("/myblogs")

    } 

    console.log("title: " + title);
    console.log("desc: " + desc);
    
    return <>
        <Navbar/>
        <div className="editBlog">
            <div className="editBlog_main">
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

                        <TextField id="outlined-search"className="imgurl" label="Image URL" type="search" value={imgURL} onChange={imgURLHandler } />

                    </div>
                    <Button className="blog_btn" onClick={editFormHandler} variant="contained" endIcon={<SendIcon />}>
                        Update
                    </Button>
                </Box>
            </div>
        </div>
    </>
}


export default EditBlog;