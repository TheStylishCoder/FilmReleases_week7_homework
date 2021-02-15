import React from 'react';

const Film = ({children}) => {
    return(
        <div className="film">
            <p>{children}</p>
        </div>
    )
};

export default Film;