import React, { useEffect, useState } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import '../css/feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import db from '../config/firebase'

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map( doc => doc.data()));
    })
  }, []);



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
      {posts.length &&  
        posts.map(post => (
          <Post 
        displayName={post.displayName}
        userName={post.userName}
        verified={post.verified}
        text={post.text}
        image={post.image}
        avatar={post.avatar}
      />
        ))
      } 
      <TwitterTweetEmbed tweetId='1605137205323628544' />
    </div>
  )
}

export default Feed
