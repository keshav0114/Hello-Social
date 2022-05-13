import React from 'react'
import "./Online.css"

function Online({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
            <li className="rightBarFriend">
               <div className='RightbarProfileImgContainer'>
                   <img  className="rightbarProfileImg" src={PF+user.profilePicture} alt=""/>
                   <span className='rightbarOnline'></span>
               </div>
               <span className='rightbarUsername'>{user.username}</span>
            </li>
        </div>
    )
}

export default Online
