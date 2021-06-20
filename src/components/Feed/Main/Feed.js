import React from 'react'
import StoryReel from '../Story/StoryReel.js'
import MessageSender from '../Message/MessageSender.js'
import Post from '../Post/Post.js'
import './Feed.css'


const Feed = () => {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            <Post
            profilePic="https://avatars.githubusercontent.com/u/67240543?v=4"
            message="This is a message"
            timestamp="1601493943737"
            imgName="imgName"
            username='John'
            />
             <Post
            profilePic="https://avatars.githubusercontent.com/u/67240543?v=4"
            message="This is a message"
            timestamp="1601493943737"
            imgName="imgName"
            username='John'
            />
             <Post
            profilePic="https://avatars.githubusercontent.com/u/67240543?v=4"
            message="This is a message"
            timestamp="1601493943737"
            imgName="imgName"
            username='John'
            />
             <Post
            profilePic="https://avatars.githubusercontent.com/u/67240543?v=4"
            message="This is a message"
            timestamp="1601493943737"
            imgName="imgName"
            username='John'
            />
             <Post
            profilePic="https://avatars.githubusercontent.com/u/67240543?v=4"
            message="This is a message"
            timestamp="1601493943737"
            imgName="imgName"
            username='John'
            />
        </div>
    )
}

export default Feed
