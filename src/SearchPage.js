import React from 'react'
import "./SearchPage.css";
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from "./VideoRow";

function SearchPage() {
    return (
        <div className = "searchPage" >
            <div className = "searchPage__filter" >
                <TuneIcon/>
                <h2>Filter</h2>
            </div>
            <hr/>
            <ChannelRow
                image = "https://yt3.ggpht.com/H2Eje3rgUp9LQB4lDEPgU5DF2IRrYkz4yXadTjJjhxErLDl7Gq-qAzSS_r0dCGXp5V_ZO9chjA=s600-c-k-c0x00ffffff-no-rj-rp-mo"
                channel = "BackWard Swards"
                verified
                subs = '30M'
                noOfVideos = {13}
                description = "You can find awesome gamming videos here Also, expect gamming tips and tricks that make you a better player "
            />
            <hr/>
            <VideoRow
                views = "1.8M"
                subs = '666k' 
                description = "This video is about how to get elytra in fastest way."
                timestamp = "1 hours ago" 
                channel = "BackWard Swards" 
                title = "How to get elytra in minecraft" 
                image = "https://www.minecraft.net/content/dam/minecraft/taking-inventory/elytra/ti-elytra-header.jpg.transform/minecraft-image-large/image.jpg"
            />
        </div>
    )
}

export default SearchPage
