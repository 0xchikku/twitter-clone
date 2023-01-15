import React from 'react';
import '../css/widgets.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {
  TwitterShareButton,
  TwitterTimelineEmbed
} from 'react-twitter-embed';


function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets--input'>
        <SearchOutlinedIcon className='widget--searchIcon' />
        <input type='text' placeholder='Search Twitter' />
      </div>
      <div className='widegt--widgetContainer'>
        <h2>What's Happening</h2>
        <TwitterTimelineEmbed 
          sourceType='profile'
          screenName='Rdchikku_'
          options={{height: 300}}
        />
        {/* <TwitterTimelineEmbed 
          sourceType='profile'
          screenName='naval'
          options={{height: 300}}
        /> */}

        <TwitterShareButton 
          url={'https://github.com/0xchikku/twitter-clone'}
          options={{text : 'Twitter Clone', via : 'Rdchikku_'}}
        />
      </div>
    </div>
  )
}

export default Widgets
