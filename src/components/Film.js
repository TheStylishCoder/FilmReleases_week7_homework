import React from 'react';

const Film = ({url, children}) => {
    return(
        <div className="film">
            <p>{children}</p>
        </div>
    )
};

export default Film;