import React from 'react';
import Film from './Film';


const FilmsList = ({films}) => {

    const filmNodes = films.map((film) => {
        return(
            <Film key={film.id}><a href={film.url}>{film.name}</a></Film>
        );
    })


    return(
        <div className="films-list">
            {filmNodes}
        </div>

    )
};

export default FilmsList;