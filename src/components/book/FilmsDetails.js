import React from 'react';

const FilmsDetails  = ({data}) => {
    
    return (
      <div className="media">
        <div className="media-left">
          <a href="javascript:void(0)">
            <img className="media-object" src="http://placehold.it/200x280" alt="Placehold" />
          </a>
        </div>
        { data && <div className="media-body">
          <p>Films Title: {data.title}</p>
          <p>Director: {data.director}</p>
          <p>Producer: {data.producer}</p>
          <p>Opening Crawl: {data.opening_crawl}</p>
        </div> }
      </div>
    );
};


export default FilmsDetails ;
