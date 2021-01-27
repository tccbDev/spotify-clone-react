export const initialState = {
    user: null,
    playlists : [],
    playing: false,
    item : null,
    token: null,
    discover__weekly: null,

}

export const reducer = (state, action)=>{
console.log(action);
switch (action.type) {
    case "SET_USER":
        return {
            ...state,
            user: action.user,
        };
    case "SET_TOKEN" :
        return {
            ...state,
            token: action.token,
        };
    case "SET_PLAYLISTS" :
        return {
            ... state,
            playlists: action.playlists
        }
    case "SET_DISCOVER_WEEKLY":
        return {
            ... state,
            discover__weekly: action.discover__weekly
        };
    default:
        return state;
}
}
export default reducer;
