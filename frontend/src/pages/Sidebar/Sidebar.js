import React, { useState } from 'react';
import './Sidebar.css'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SeacrhIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreIcon from '@mui/icons-material/More';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DoneIcon from '@mui/icons-material/Done';
import { Avatar, Button, IconButton, ListItemIcon, Menu, MenuItem, Divider, handleLogout } from '@mui/material';
import CustomLink from './CustomLink';
import useLoggedInUser from '../../hooks/useLoggedInUser';

const Sidebar = ({handleLogout, user }) => {
const [anchorE1, setAnchorE1]=useState(null);
    const openMenu = Boolean(anchorE1); 
    const [loggedInUser] = useLoggedInUser();

    const userProfilePic = loggedInUser[0]?.profileImage?loggedInUser[0]?.profileImage: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"

    const handleClick = e =>{
        setAnchorE1(e.currentTarget);
    }
    const handleClose = () =>{
        setAnchorE1(null);
    }

    const result = user[0]?.email?.split('@')[0];

    return (
        <div className='sidebar'>
            <BubbleChartIcon className='sidebar_twitterIcon'/>
            <CustomLink to='/home/feed'>
            <SidebarOptions active Icon={HomeIcon} text="Home" />
            </CustomLink>
            <CustomLink to='/home/explore'>
            <SidebarOptions active Icon={SeacrhIcon} text="Explore" />
            </CustomLink>
            <CustomLink to='/home/notifications'>
            <SidebarOptions active Icon={NotificationsIcon} text="Notifications" />
            </CustomLink>
            <CustomLink to='/home/messages'>
            <SidebarOptions active Icon={MailOutlineIcon} text="Messages" />
            </CustomLink>
            <CustomLink to='/home/bookmarks'>
            <SidebarOptions active Icon={BookmarkBorderIcon} text="Bookmarks" />
            </CustomLink>
            <CustomLink to='/home/lists'>
            <SidebarOptions active Icon={ListAltIcon} text="Lists" />
            </CustomLink>
            <CustomLink to='/home/profile'>
            <SidebarOptions active Icon={PermIdentityIcon} text="Profile" />
            </CustomLink>
            <CustomLink to='/home/more'>
            <SidebarOptions active Icon={MoreIcon} text="More" />
            </CustomLink>

            <Button variant='outlined' className='sidebar_tweet'>
                POST
            </Button>

            <div className='Profile_info'>
                <Avatar src={userProfilePic} />
                <div className='user_info'>
                    <h4>
                        {
                            loggedInUser[0]?.name?loggedInUser[0]?.name: user && user[0]?.displayName
                        }
                    </h4>
                    <h5>@{result}</h5>
                </div>
                <IconButton 
                size='small' 
                sx={{ml: 2}}
                aria-controls={openMenu? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu? "true" : undefined}
                onClick={handleClick}
                >
                    <MoreHorizIcon/>
                    </IconButton>
                    <Menu id='basic-menu' anchorEl={anchorE1} open={openMenu} onClick={handleClose} onClose={handleClose}>
                        <MenuItem className='Profile_info1'>
                        {loggedInUser[0]?.profileImage?loggedInUser[0]?.profileImage:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}
                <div className='user_info subUser_info'>
                    <div>
                    <h4>
                        {
                            loggedInUser[0]?.name?loggedInUser[0]?.name: user && user[0]?.displayName
                        }
                    </h4>
                    <h5>@{result}</h5>
                    </div>
                    <ListItemIcon className='done_icon'><DoneIcon/></ListItemIcon>
                </div>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout @batmanshinchan</MenuItem>
                    </Menu>
            </div>

        </div>
    );
};

export default Sidebar;