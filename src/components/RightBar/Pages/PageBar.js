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
        pageUrl="https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.6435-9/116977510_142088054207374_2287436593749486037_n.png?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=haxEZg6dYx8AX9S4ZC0&tn=0EaPRj4vpsKPTPQh&_nc_ht=scontent.ftpa1-2.fna&oh=9c1e392af3db140ee6a5b22403e3b17c&oe=60D512A5"
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
