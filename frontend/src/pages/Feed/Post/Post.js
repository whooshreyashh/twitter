import { Avatar } from "@mui/material";
import React from "react";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import RepeatIcon from '@mui/icons-material/Repeat';
import './Post.css'


const Post = ({p}) => {
    const {name, username, photo, post, profilephoto} = p;
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={profilephoto} />
            </div>
            <div className="ppst_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            {name}{" "}
                            <span className="post_headerSpecial">
                                <VerifiedIcon className="post_badge" /> @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>{post}</p>
                    </div>
                    <img src={photo} alt="" width='500' />
                    <div className="post_footer">
                        <ThumbUpOffAltIcon className="post_footer_icon" fontSize="small" />
                        <ThumbDownOffAltIcon className="post_footer_icon" fontSize="small" />
                        <ChatBubbleOutlineIcon className="post_footer_icon" fontSize="small" />
                        <RepeatIcon className="post_footer_icon" fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;