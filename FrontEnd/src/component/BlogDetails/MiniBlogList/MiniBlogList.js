import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

import "./MiniBlogList.css"

function MiniBlogList(){
    return(
        <div className="moreBlog">
            
            <div className="miniBlogList">
                <div className="miniBlogList_Info">
                    <div className='miniBlogList_user'>
                        <AccountCircleRoundedIcon fontSize='small'/>
                        <p className="miniBlogName">Shubham Ram</p>
                    </div>
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