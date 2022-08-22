import { useParams, useNavigate } from "react-router-dom";
import "./BlogList.css"

function BlogList(props){
    const navigate = useNavigate();

    const openBlog = ()=>{
        // let blogID = event.target.id;
        let blogID = props.id;
        console.log(blogID);
        navigate(`/blogDetail/${blogID}`, {replace:true})
    }
    let des = props.description;
    return <>
        <div className="bloglist" onClick={openBlog}>
            <div className="bloglist_info">
                <div className="bloglist_top">
                    <span className="date">
                        {/* <p className="date">Aug 15, 2022</p> */}
                        <p className="date">{props.date}</p>

                    </span>
                    <p>·</p>
                    <p className="name">{props.name}</p>
                </div>
                <h1 className="title">{props.title}</h1>
                {/* <p className="desc">{props.description}</p> */}
                <p className="desc">{des.substr(0,170)} 
                <a className="readMore">[.....]</a>
                </p>
                {/* <p className="desc">`${des.substr(0,170)}`</p> */}


                
                <div className="bloglist_bottom">
                    <div className="tag">{props.tag}</div>
                </div>
            </div>
            <div>
                <img src={props.imgURL} alt="1"/>
            </div>
        </div>
    </>
}

export default BlogList