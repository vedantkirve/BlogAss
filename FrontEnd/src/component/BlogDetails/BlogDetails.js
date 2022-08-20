import "./BlogDetails.css"
import MiniBlogList from "./MiniBlogList/MiniBlogList"
import axios from "axios"
import { useEffect } from "react"
// import MiniBlogList from "./MiniBlogList"

function BlogDetails(){

    // useEffect(()=>{

    // },[])
    return(
        <div className="parent">
            <div className="blogBodyPartOne">  
                {/* <div>
                    
                    <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png" alt="Avatar" className="avatar"/>
                    
                    <span>Admin Name <p>12 jun 2022</p></span>
                    
                </div> */}
                <h2 className="blogTitle">This is Not a ‘Drought’</h2>
                <img className="blogImage" src="https://miro.medium.com/max/1050/1*Z5aIORmvJPFSDxTmN1_hkA.jpeg" alt="2"/>
                
              
                <div className="blogDescription">
                <p>
                It’s easy to see why media outlets have seized upon dramatic images like the one above. It’s scary as hell.
                Exposed “bathtub rings” on shrinking reservoirs are a powerful reminder of just how much water we use, and how quickly our essential water sources can dry up. And if you’ve been paying attention, you know that the American West is experiencing its driest 22-year period in the past 1,200 years.
                Experts are throwing around words like “megadrought” to explain the bone-dry conditions that have shaped the West over the past two decades, with dire predictions of what will happen to our western cities and agriculture if the drought continues.
                Record temperatures, empty reservoirs, year-round wildfires, strained power grids, and millions of acres of fallowed farmland from California to Utah are just a few of the existential problems facing the American West.
                But I have bad news for anyone who’s hoping that a few years of record rainfall (and snow), and a wave of low-flow conservation is going to end the drought so things can finally get “back to normal.”
                </p>
                </div>
            </div>
            <div className="blogBodyPartTwo">
                
                <div className="BlogComponents">
                    <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png" alt="Avatar" className="avatar"/>
                    <p className="authurName">Abdul Malik</p>
                    <div className="gmail-info">
                        
                        <i className="material-icons gmail-icon">
                            gmail
                        </i>
                        <span className="authur-gmail">Adbul.Malik@gmail.com</span>
                    </div>
                    
                </div>
                <hr></hr>
                <MiniBlogList></MiniBlogList>
            </div>
        </div>
    )
}

export default BlogDetails