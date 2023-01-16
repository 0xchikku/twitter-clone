import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
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
      <TwitterTweetEmbed tweetId='1002103360646823936'/>
      <Post/> 
      <TwitterTweetEmbed tweetId='1605137205323628544' />
    </div>
  )
}

export default Feed
