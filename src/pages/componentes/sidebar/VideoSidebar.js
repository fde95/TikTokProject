import React, {useState} from 'react'
import "./videosidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';


function VideoSidebar({likes, messeges, share}) {

    const [liked, setLiked] = useState (false)
    
    function handdleLike(){
        setLiked(!liked)
    }


  return (
    <div className='videoSidebar'>
        <div 
            className='videoSidebar__options'
            onClick={handdleLike}
            >
                { liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large' /> }
            <p> { liked ? likes + 1 : likes } </p>
        </div>
        <div className='videoSidebar__options'>
            <ChatIcon fontSize='large' />
            <p> {messeges}</p>
        </div>
        <div className='videoSidebar__options'>
            <ShareIcon fontSize='large'/>
            <p>{share}</p>
        </div>
    </div>
  )
}

export default VideoSidebar