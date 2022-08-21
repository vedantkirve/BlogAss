import React from 'react';
import ReactDOM from 'react-dom/client';

import Register from './component/Register2/Register';
import Login from './component/Login2/Login';
import CreateBlog from './component/CreateBlog/CreateBlog';
import EditBlog from './component/EditBlog/EditBlog';
import MyBlogs from './component/MyBlog/MyBlog';
import BlogDetails from './component/BlogDetails/BlogDetails';
import Business from './component/Tags/Business';
import Health from './component/Tags/Health';
import Science from "./component/Tags/Science"
import Techology from "./component/Tags/Technology"
import Travel from "./component/Tags/Travel"
import App from './App';

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<App/>}> </Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path='/createblog' element={<CreateBlog/>}></Route>
      <Route path='/editblog' element={<EditBlog/>}></Route>
      <Route path='/myblogs' element={<MyBlogs/>}></Route>
      <Route path='/blogDetail' element={<BlogDetails/>}></Route>
      <Route path='/business' element={<Business/>}></Route>
      <Route path='/health' element={<Health/>}></Route>
      <Route path='/science' element={<Science/>}></Route>
      <Route path='/technology' element={<Techology/>}></Route>
      <Route path='/travel' element={<Travel/>}></Route>




    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
