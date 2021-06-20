import React from 'react'
import Story from './Story.js'
import './StoryReel.css'

const StoryReel = () => {

    return (
        <div className="storyReel">
            <Story
                image="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://avatars.githubusercontent.com/u/67240543?v=4"
                title="John"
            />
            <Story
                image="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg"
                profileSrc="https://avatars.githubusercontent.com/u/67240543?v=4"
                title="James"
            />
            <Story
                image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                profileSrc="https://avatars.githubusercontent.com/u/67240543?v=4"
                title="Matt"
            />
        </div>
    )
}

export default StoryReel