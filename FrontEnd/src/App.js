import {  useState, useEffect } from 'react';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import Navbar from './component/Navbar';
import BlogList from './component/BlogList/BlogList';
import CreateBlogIcon from './component/CreateBlog/CreateBlogIcon';
import axios from 'axios';

import './App.css';

const UserRegisterInfo=[];
const UserLoginInfo =[];

function App() {

  const [blogList,setBlogList] = useState([])

  const onUserInfo =(d)=>{
    UserRegisterInfo.push(d);
    console.log(UserRegisterInfo)
  }

  const onLoginInfo =(d)=>{
    UserLoginInfo.push(d);
    console.log(UserLoginInfo)
  }

  useEffect(()=>{
    async function getBlogList(){
      let data = await axios.get("http://127.0.0.1:3000/allBlogs")
      console.log("All Blogs-----",data.data)
      setBlogList(data.data)
    }


    getBlogList()

  },[])

  return (
   <div>
    {/* <Register getData={onUserInfo}/> */}
    {/* <Login getData = {onLoginInfo}/> */}
    <Navbar name="explore"/>
    <CreateBlogIcon/>
    <BlogList/>
    <BlogList/>
    <BlogList/>
    <BlogList/>
    <BlogList/>
    <BlogList/>

    {blogList.map((Blog)=>{
      return <BlogList id ={Blog.blogid} name={Blog.authorName} title={Blog.title} discription={Blog.disciption}/>

    })}


   </div>
  );
}

export default App;
