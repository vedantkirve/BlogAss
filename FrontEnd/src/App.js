import Register from './component/Register/Register';
import Login from './component/Login/Login';
import Navbar from './component/Navbar';
import BlogList from './component/BlogList/BlogList';
import axios from "axios";

import './App.css';
import { useEffect, useState } from 'react';

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

  console.log("BlogList---->>>>>",blogList)

  return (
   <div>
    {/* <Register getData={onUserInfo}/> */}
    {/* <Login getData = {onLoginInfo}/> */}
    <Navbar/>
    {/* /* <BlogList/> */}
    {blogList.map((Blog)=>{
      return <BlogList name={Blog.authorName} title={Blog.title} discription={Blog.disciption}/>

    })}

   </div>
  );
}

export default App;
