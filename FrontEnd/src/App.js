import {  useState, useEffect } from 'react';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import Navbar from './component/Navbar';
import BlogList from './component/BlogList/BlogList';
import CreateBlogIcon from './component/CreateBlog/CreateBlogIcon';
import { Link, useNavigate } from "react-router-dom";

import axios from 'axios';

import './App.css';

const UserRegisterInfo=[];
const UserLoginInfo =[];

function App() {

  const [blogList,setBlogList] = useState([])
  
  const [log, setLog] = useState();
  const navigate = useNavigate();


  useEffect(()=>{
    async function getBlogList(){
      let data = await axios.get("http://127.0.0.1:3000/allBlogs")
      console.log("All Blogs-----",data.data)
      setBlogList(data.data)

      if(localStorage.getItem("userID") === null){
        setLog(false);
      }else{
        setLog(true);
      }
    }


    getBlogList()

  },[])

  return (
   <div>
    {log ? 
      <div>
          <Navbar name="explore"/>
          <CreateBlogIcon/>
          {blogList.map((Blog)=>{
            return <BlogList id ={Blog.id} name={Blog.authorName} title={Blog.title} imgURL={Blog.imageUrl} description={Blog.description} tag={Blog.tags} date={Blog.dateTime}/>

          })}
      </div>
    :
        navigate("/")
    }
   </div>
  );
}

export default App;
