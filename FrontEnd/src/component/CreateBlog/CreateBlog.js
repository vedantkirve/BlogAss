import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";


import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import "./CreateBlog.css"

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

function CreateBlog() {
    const API_url = "http://127.0.0.1:3000/createBlog"
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [tag, setTag] = useState("")
    const [imgURL, setImgURL] = useState("")
    const [date, setDate] = useState(new Date());

    const [log, setLog] = useState();


    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    useEffect(()=>{
        if(localStorage.getItem("userID") === null){
            setLog(false);
          }else{
            setLog(true);
          }
    },[])

    const titleHandler = (e) => setTitle(e.target.value)
    const descHandler = (e) => setDesc(e.target.value);
    const tagHandler = (e) => setTag(e.target.value);
    const imgURLHandler  = (e) => setImgURL(e.target.value);

    const blogHandler = async (e) => {
        e.preventDefault();
        let userID = localStorage.getItem("userID");
        let name = localStorage.getItem("authorName");

        console.log(userID, name);
        let blog = {
            title: title,
            description: desc,
            tags: tag,
            imageUrl: imgURL,
            userId: userID,
            authorName: name,
            dateTime: date.toLocaleDateString()
            // time: date.toLocaleTimeString()
        }
        console.log(blog);

        let response = await axios.post(API_url,blog)
        if(response.status === 200){
            navigate("/myblogs")
        }else{

        }
        console.log("Responses---------",response)
        setTitle(""); setDesc(""); setTag(""); setImgURL("");
    }

    return <>
    {log?
        <div>
            <Navbar />
            <div className="createBlog">
                <div className="createBlog_main">

                <h1>Create A Blog</h1>

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
                    <Button className="blog_btn" onClick={blogHandler} variant="contained" endIcon={<SendIcon />}>
                        Upload
                    </Button>
                </Box>
                </div>

            </div>
        </div>
    :
        navigate("/")
    }
    </>
}

export default CreateBlog;