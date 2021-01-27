import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import Avatar from "@material-ui/core/Avatar";
import {useDataLayerValue} from "./DataLayer";

function Header({spotify}) {

    const [{user}, dispatch] = useDataLayerValue()
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon/>
                <input type="text" placeholder="Search for Artists , Songs "/>
            </div>
            <div className="header__right">
            <h4>{user?.display_name}</h4>
                <Avatar src={user?.images[0]?.url} alt="houssem"/>
            </div>
        </div>
    )

}

export default Header
