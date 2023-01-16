import React from 'react';
import '../css/post.css';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { Avatar } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function Post({
    avatar,
    displayName,
    userName,
    verified,
    text,
    image,
}) {
  return (
    <div className='post'>
        <div className='post--avatar'>
            <Avatar src={avatar} />
        </div>
        <div className='post--body'>
            <div className='post--header'>
                <div className='post--headerText'>
                    <h3>
                        {displayName}{' '}
                        <span className='post--headerSpecial'>
                            {verified && <VerifiedOutlinedIcon className='post--badge'/>}
                            @{userName}
                        </span>
                    </h3>
                </div>
                <div className='post--headerDescription'>
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt='upslash' />
            <div className='post--footer'>
                <ChatBubbleOutlineOutlinedIcon fontSize='small' />
                <RepeatOutlinedIcon fontSize='small'/>
                <FavoriteBorderOutlinedIcon fontSize='small'/>
                <ShareOutlinedIcon fontSize='small'/>
            </div>
        </div>
    </div>
  )
}

export default Post;