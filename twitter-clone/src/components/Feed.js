import React from 'react';
import '../css/feed.css';
import Post from './Post';
import TweetBox from './TweetBox';

function Feed() {
  return (
    <div className='feed'>
      {/* Header */}
      <div className='feed--header'>
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox/>

      {/* Posts */}
      <Post/> 
      <Post/> 
    </div>
  )
}

export default Feed
