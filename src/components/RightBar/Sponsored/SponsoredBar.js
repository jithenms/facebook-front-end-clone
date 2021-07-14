import React from 'react'
import './SponsoredBar.css'

const Sponsored = ({img, title, url}) => {
    return (
    <div className="sponsored">
        <img src={img}/>
        <div className="items">
        <h4>{title}</h4>
        <p>{url}</p>
        </div>
    </div>
    )
}

const SponsoredBar = () => {
    return (
        <div className="sponsoredItems">
        <Sponsored
        img="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2021/05/06/64ea1b36-ae55-11eb-9c9f-63ba12e765d1_image_hires_183838.jpg?itok=sb2kbU7i&v=1620297524"
        title="Comprehensive University"
        url="https://thisisus.com"
        />
        <Sponsored
        img="https://pbs.twimg.com/profile_images/1363690782511820800/jQYk5dlZ_400x400.jpg"
        title="Polo G"
        url="https://thisisus.com"
        />
        </div>
    )
}

export default SponsoredBar
