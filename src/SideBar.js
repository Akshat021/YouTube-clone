import React from 'react'
import "./SideBar.css"
import SidebarRow from "./SidebarRow";
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const SideBar = () => {
    return (
        <div className = "sideBar" >
            {/* Passing title and Icons as props */}
            <SidebarRow selected Icon = {HomeIcon} title = 'Home'/>
            <SidebarRow Icon = {ExploreIcon} title = 'Explore'/>
            <SidebarRow Icon = {SubscriptionsIcon} title = 'Subscriptions'/>
            <hr/>
            <SidebarRow Icon = {VideoLibraryIcon} title = 'Library'/>
            <SidebarRow Icon = {HistoryIcon} title = 'History'/>
            <SidebarRow Icon = {OndemandVideoIcon} title = 'Your videos'/>
            <SidebarRow Icon = {WatchLaterIcon} title = 'Watch later'/>
            <SidebarRow Icon = {ThumbUpAltIcon} title = 'Liked videos'/>
            <SidebarRow Icon = {ExpandMoreIcon} title = 'Show more'/>
            <hr/>            

        </div>
    )
}

export default SideBar
