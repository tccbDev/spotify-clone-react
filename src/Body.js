import React from "react"

import './Body.css'
import Header from "./Header";
import {useDataLayerValue} from "./DataLayer";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "./SongRow";
function Body({spotify}) {
    const [{discover__weekly}, dispatch ] = useDataLayerValue();
    console.log("DISCOVER WEEKLY",discover__weekly)
return (
    <div className="body">
        <Header spotify={spotify}/>
        <div className="body__info">
            <img src={discover__weekly?.images[0].url} alt=""/>
            <div className="body__infoText">
                <strong> PLAYLIST</strong>
                <h2>Discover Weekly</h2>
                <p> {discover__weekly?.description}</p>
            </div>
        </div>
        <div className="body__songs">
            <div className="body__icons">
            <PlayCircleFilledIcon className="body__shuffle"/>
            <FavoriteIcon/>
            <MoreHorizIcon/>
            </div>
            {/* List of songs */}
            {discover__weekly?.tracks.items.map((item)=> (
                <SongRow track={item.track}/>

            ))}
        </div>
    </div>
)
}
export default Body
