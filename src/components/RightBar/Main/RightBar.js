import React from 'react'
import SponsoredBar from '../Sponsored/SponsoredBar'
import PageBar from '../Pages/PageBar.js'
import ContactsBar from '../Contacts/ContactsBar.js'
import './RightBar.css'

const RightBar = () => {
    return (
        <div className="rightbar_section">
            <div className="sponsored">
                <h4>Sponsored</h4>
            </div>
            <SponsoredBar/>
            <div className="pages">
                <h4>Pages</h4>
            </div>
            <PageBar/>
            <div className="contacts">
                <h4>Contacts</h4>
            </div>
            <ContactsBar/>
        </div>
    )
}

export default RightBar
