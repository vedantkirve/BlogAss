import "./MiniBlogList.css"

function MiniBlogList(){
    return(
        <div>
            <p>Look For More Blogs</p>
            
            <div className="miniBlogList">
                <div className="miniBlogList_Info">
                    <p className="miniBlogName">Shubham Ram</p>
                    <h3 className="miniBlogTitle" >The Product Cult Shift</h3>
                    {/* <p>Aug 15</p> */}
                </div>
                <div>
                    <img  className= "miniBlogImage"src="https://picsum.photos/300/200" alt="1"/>
                </div>
            </div>
        </div>
    );
}

export default MiniBlogList