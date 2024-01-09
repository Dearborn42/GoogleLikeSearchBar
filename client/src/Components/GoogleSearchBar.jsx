import React from 'react';
import {CiSearch} from "react-icons/ci";
const GoogleSearchBar = () => {
    return (
        <div style={{marginLeft:"auto", marginRight:"auto"}}>
            <form action="http://google.com/search" target="-blank">
                <input name="q" />
                <button type="submit"><CiSearch/></button>
            </form>
        </div>
    )
}

export default GoogleSearchBar