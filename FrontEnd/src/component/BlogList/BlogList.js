import "./BlogList.css"

function BlogList(){
    return <>
        <div className="bloglist">
            <div className="bloglist_info">
                <div className="bloglist_top">
                    <span className="date">
                        <p className="date">Aug 15, 2022</p>
                    </span>
                    <p>·</p>
                    <p className="name">Shubham Ram</p>
                </div>
                <h1 className="title">The Product Cult Shift</h1>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
                
                <div className="bloglist_bottom">
                    <div className="tag">Technology</div>
                </div>
            </div>
            <div>
                <img src="https://picsum.photos/300/200" alt="1"/>
            </div>
        </div>
    </>
}

export default BlogList