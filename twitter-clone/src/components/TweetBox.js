import { Avatar, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../css/tweetBox.css';
// import avatarDp from '../assets/images';

function TweetBox() {

    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        let src = 'https://rdportsites.carrd.co/assets/images/image01.jpg?v=bdf90ed4';
        setAvatar(src);
    }, []);

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox--input'>
            {avatar && <Avatar src={avatar}/>}
            <input placeholder='Whats happening?' type='text'/>
        </div>
        <Button className='tweetBox--tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
