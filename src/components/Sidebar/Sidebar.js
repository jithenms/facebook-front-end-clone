import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow.js'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.6435-9/92245179_249196586230097_7625111261725851648_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Kxxa_mfs5tUAX9PrGaX&_nc_ht=scontent.ftpa1-1.fna&oh=a86625e8c4fe4711bb9b6066be98f460&oe=60D47C00" title="John" />
            <SidebarRow Icon={LocalHospitalIcon}
            title="Covid 19 Information Center"/>

            <SidebarRow Icon={EmojiFlagsIcon}
            title="Pages"/>
            <SidebarRow Icon={PeopleIcon}
            title="Friends"/>
            <SidebarRow Icon={ChatIcon}
            title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon}
            title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon}
            title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined}
            title="More"/>

        </div>
    )
}

export default Sidebar
