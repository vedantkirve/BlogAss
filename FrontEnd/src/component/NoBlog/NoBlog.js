import "./NoBlog.css"

function NoBlog(){
    return(
        <div className="body" >
            <div>
                <div>
                    <img className="noBlogImage" src="https://pic.onlinewebfonts.com/svg/img_278242.png" alt="No blog picture"></img>
                </div>
                <p className="noBlogTitle">No Blogs Yet</p>
                <button className="createButton">Create New Blog</button>
            </div>
        </div>
    )
}

export default NoBlog