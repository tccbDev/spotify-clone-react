import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import {useEffect, useState} from "react";
import {getTokenFromUrl} from "./spotify";
import Player from "./Player";
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = useState(null);
    const [DataLayer, dispatch] = useDataLayerValue();
    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const token = hash.access_token;
        if (token) {
            dispatch({
                type:"SET_TOKEN",
                token
            })
            setToken(token);
            spotify.setAccessToken(token);
            spotify.getMe().then((user) => {
                console.log("USER >>>", user);
                dispatch({
                    type: "SET_USER",
                    user: user
                })
            });
            spotify.getUserPlaylists().then((playlists)=>{
                dispatch({
                    type:"SET_PLAYLISTS",
                    playlists
                })
            })

        }
        spotify.getPlaylist('2PM7Di2AEcBfSv0CWweNGq')
            .then((response)=>{
                console.log("RESPONSE >>>",response)
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover__weekly: response
                })
            })
    }, []);
    return (
        <div className="App">
            {
                token ? (
                    <Player spotify={spotify}/>
                ) : (
                    <Login/>
                )
            }

        </div>
    );
}

export default App;
