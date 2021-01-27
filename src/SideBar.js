import React from "react";
import './SideBar.css'
import SideBarOption from "./SideBarOption";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import {useDataLayerValue} from "./DataLayer";

function SideBar() {
    const [{playlists}, dispatch] = useDataLayerValue()
    console.log("my playlists",playlists)
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                 alt=""/>
            <SideBarOption title="Home" Icon={HomeIcon}/>
            <SideBarOption title="Search" Icon={SearchIcon}/>
            <SideBarOption title="Your Library" Icon={LibraryMusicIcon}/>
            <br/>
            <strong className="sidebar__title"> PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map(playlist=>(
                <SideBarOption title={playlist.name}/>
            ))}

            <SideBarOption title="HipHop"/>
        </div>
    )
}

export default SideBar
