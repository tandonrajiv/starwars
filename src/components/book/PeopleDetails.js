import React from 'react';

const PlanetDetails  = ({data}) => {
    
    return (
      <div className="media">
        <div className="media-left">
          <a href="javascript:void(0)">
            <img className="media-object" src="http://placehold.it/200x280" alt="Placehold" />
          </a>
        </div>
        { data && <div className="media-body">
          <p>People name: {data.title}</p>
          <p>Gender: {data.gender}</p>
          <p>Hair Color: {data.hair_color}</p>
          <p>Skin Color: {data.skin_color}</p>
        </div> }
      </div>
    );
};


export default PlanetDetails ;
