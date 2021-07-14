import React from 'react'
import './PageBar.css'

import NotificationsIcon from '@material-ui/icons/Notifications';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Pages = ({title, pageUrl}) => {
    return (
    <div className="pages">
        <div className="pageItem">
        <img className="page_pic" src={pageUrl}/>   
        <h4>{title}</h4>
        </div>
    </div>
    )
}


const PageBar = () => {
    return (
        <div className="pageItems">
        <Pages
        title="ProofMethod"
        pageUrl="https://pbs.twimg.com/profile_images/1328435110245527552/zY8Xamhc_400x400.jpg"
        />
        <div className="pageAction">
            <div className="notifications">
                <NotificationsIcon/>
                <p>9 Notifications</p>
            </div>
            <div className="createAd">
                <AddCircleIcon/>
                <p>Create Ad Campaign</p>
            </div>
        </div>
        </div>
    )
}

export default PageBar
