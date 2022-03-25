
type IconProps = {
    color: string,
    width?: number,
    height?: number
}

function AppIcon({ color, width=24, height=24 }:IconProps){

    return(
        <svg xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`} fill={color}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
        </svg>
    )
}

function DiscoverAllIcon({ color, width=24, height=24 }:IconProps){

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`} fill={color}>
            <g fillRule="evenodd">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"/>
            </g>
        </svg>
    )
}

function MoviesIcon({ color, width=24, height=24 }:IconProps){

    return(
        <svg xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`} fill={color}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
        </svg>
    )
}

function TvIcon({ color, width=24, height=24 }:IconProps){

    return(
        <svg xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`} fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z"/>
        </svg>
    )
}

function BookmarkIcon({ color, width=24, height=24 }:IconProps){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`} fill={color}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
        </svg>
    )
}

function UserAcount({ color, width=24, height=24 }:IconProps){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${height}px`} viewBox="0 0 24 24" width={`${width}px`} fill={color}>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
    )
}

export  
{
    AppIcon, 
    DiscoverAllIcon,
    MoviesIcon,
    TvIcon,
    BookmarkIcon,
    UserAcount
}