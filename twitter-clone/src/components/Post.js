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
            <Avatar src='https://rdportsites.carrd.co/assets/images/image01.jpg?v=bdf90ed4' />
        </div>
        <div className='post--body'>
            <div className='post--header'>
                <div className='post--headerText'>
                    <h3>
                        Ritesh{' '}
                        <span className='post--headerSpecial'>
                            <VerifiedOutlinedIcon className='post--badge'/>  @ritesh
                        </span>
                    </h3>
                </div>
                <div className='post--headerDescription'>
                    <p>Building a Twitter clone!</p>
                </div>
            </div>
            <img src='https://rdportsites.carrd.co/assets/images/image03.jpg?v=bdf90ed4' alt='upslash' />
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