import React, { useEffect, useState } from 'react'
import '../css/sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';


function Sidebar() {

  const [sidebarOptions, setSidebarOption] = useState([]);

  useEffect(() => {
    setSidebarOption(
      [
        {
          label : 'Home',
          icon : HomeOutlinedIcon,
          active : true,
        },
        {
          label : 'Explore',
          icon : TagIcon,
          active : false,
        },
        {
          label : 'Notifications',
          icon : NotificationsNoneOutlinedIcon,
          active : false,
        },
        {
          label : 'Messages',
          icon : EmailOutlinedIcon,
          active : false,
        },
        {
          label : 'Bookmarks',
          icon : BookmarkBorderOutlinedIcon,
          active : false,
        },
        {
          label : 'Lists',
          icon : ListAltIcon,
          active : false,
        },
        {
          label : 'Profile',
          icon : PermIdentityIcon,
          active : false,
        },
        {
          label : 'More',
          icon : MoreHorizIcon,
          active : false,
        },
      ]
    )
  }, []);
  

  const handleOptionClick = (option) => {
    // setSidebarOption(
    //   [
    //     ...sidebarOptions
    //   ]
    // )
    // console.log(sidebarOptions);
    console.log('selected option', option);
  }

  return (
    <div className='sidebar'>

    {/* Twitter Icon */}
    <TwitterIcon className='sidebar--twitterIcon'/>

    {/* SidebarOption */}
    {sidebarOptions.length && 
    <div>
      {sidebarOptions.map((option,i) => <SidebarOption key={i}
                                              option = {option}
                                              handleOptionClick={handleOptionClick}/>)}
    </div>}

    {/* Tweet BUtton */}
    <Button variant='outlined' className='sidebar--tweet'>Tweet</Button>

    </div>
  )
}

export default Sidebar;