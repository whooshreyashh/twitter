import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import './Widgets.css'


const Widgets = () => {
    return (
        <div className='widgets'>
            <div className='widgets_input'>
            <SearchIcon className='widgets_searchIcon' />
            <input type='text' placeholder='Search' />
            </div>

            <div className='widgets_widgetContainer'>
            <h2>What's Happening</h2>

            <TwitterTweetEmbed tweetId={'1749366701605720566'} 
            />
            
            <TwitterTimelineEmbed
            sourceType='profile'
            screenName='whistlindzl'
            options={{ height: 400 }} />
            </div>
        </div>
    );
};

export default Widgets;