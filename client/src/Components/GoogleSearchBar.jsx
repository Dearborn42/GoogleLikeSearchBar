import React from 'react';
const GoogleSearchBar = () => {
    return (
        <div>
            <form action="http://google.com/search" target="-blank">
                <input name="q" />
                <input type="submit"/>
            </form>
        </div>
    )
}

export default GoogleSearchBar