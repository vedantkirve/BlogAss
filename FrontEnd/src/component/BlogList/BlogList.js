import "./BlogList.css"

function BlogList(props){
    return <>
        <div className="bloglist">
            <div className="bloglist_info">
                <div className="bloglist_top">
                    <span className="date">
                        <p className="date">Aug 15, 2022</p>
                    </span>
                    <p>·</p>
                    <p className="name">{props.name}</p>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="desc">{props.discription}</p>
                <div className="tag">Technology</div>
            </div>
            <div>
                <img src="https://picsum.photos/300/200" alt="1"/>
            </div>
        </div>
    </>
}

export default BlogList