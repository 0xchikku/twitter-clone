import { Avatar, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../css/tweetBox.css';
import db from '../config/firebase';
// import avatarDp from '../assets/images';

function TweetBox() {

    const [avatar, setAvatar] = useState('');
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    // hard coding account details
    const account = {
      displayName : 'Ritesh Dubey',
      userName : 'ritesh.dubey',
      avatar : 'https://rdportsites.carrd.co/assets/images/image01.jpg?v=bdf90ed4',
      verified : true
    }

    useEffect(() => {
        let src = 'https://rdportsites.carrd.co/assets/images/image01.jpg?v=bdf90ed4';
        setAvatar(src);
    }, []);

    const handleTextChange = (text) => {
      setTweetMessage(text);
    }

    const handleImageChange = (url) => {
      setTweetImage(url);
    }

    const sendTweet = (e) => {
      e.preventDefault();

      db.collection('posts').add({
        ...account,
        text: tweetMessage,
        image: tweetImage
      });

      setTweetImage('');
      setTweetMessage('');
    }

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox--input'>
            {avatar && <Avatar src={avatar}/>}
            <input
            onChange ={(e) => handleTextChange(e.target.value)}
            value={tweetMessage} 
            placeholder='Whats happening?' 
            type='text'/>
        </div>
        <input
        className='tweetBox--image'
        value={tweetImage}
        onChange={(e) => handleImageChange(e.target.value)}
        placeholder='(Optional) Enter image url'
        type='text'
        />
        <Button 
        type='submit'  
        className='tweetBox--tweetButton'
        onClick={(e) => sendTweet(e)}
        >
        Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
