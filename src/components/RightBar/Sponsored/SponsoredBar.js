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
        img="https://scontent.ftpa1-2.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/123352155_23846040312770788_2883063246128709255_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=67cdda&_nc_ohc=1uoYRsIoaNAAX88ICNr&_nc_ht=scontent.ftpa1-2.fna&tp=31&oh=308532aef9533c5702ae0f6845edefa3&oe=60D49815"
        title="Comprehensive University"
        url="https://thisisus.com"
        />
        <Sponsored
        img="https://scontent.ftpa1-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/197665595_6242219111995_6844706280380130119_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=67cdda&_nc_ohc=6K49uWSPhsYAX-ZupE2&_nc_ht=scontent.ftpa1-1.fna&tp=31&oh=f1d0f4f5b0328385b2e0754ef8fdd87a&oe=60D412F1"
        title="Polo G"
        url="https://thisisus.com"
        />
        </div>
    )
}

export default SponsoredBar
