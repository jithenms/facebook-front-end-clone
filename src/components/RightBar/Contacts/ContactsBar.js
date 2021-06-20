import React from 'react'
import './ContactsBar.css'

const Contacts = ({name, profileUrl}) => {
    return (
    <div className="contact">
        <div className="contactItem">
        <img className="page_pic_2" src={profileUrl}/>   
        <h4>{name}</h4>
        </div>
    </div>
    )
}

const ContactsBar = () => {
    return (
        <div className="contactSection">
        <Contacts
        name="Jithen Shriyan"
        profileUrl="https://avatars.githubusercontent.com/u/67240543?v=4"
        />
        <Contacts
        name="Jithen Shriyan"
        profileUrl="https://avatars.githubusercontent.com/u/67240543?v=4"
        />
        <Contacts
        name="Jithen Shriyan"
        profileUrl="https://avatars.githubusercontent.com/u/67240543?v=4"
        />
        <Contacts
        name="Jithen Shriyan"
        profileUrl="https://avatars.githubusercontent.com/u/67240543?v=4"
        />
        <Contacts
        name="Jithen Shriyan"
        profileUrl="https://avatars.githubusercontent.com/u/67240543?v=4"
        />
        </div>
    )
}

export default ContactsBar
