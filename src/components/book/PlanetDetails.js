import React from 'react';

const PlanetDetails = ({data}) => {
    console.log(data,'book')
    return (
      <div className="media">
        <div className="media-left">
          <a href="javascript:void(0)">
            <img className="media-object" src="http://placehold.it/200x280" alt="Placehold" />
          </a>
        </div>
        { data && <div className="media-body">
          <p>Planet Name: {data.name}</p>
          <p>Rotation Period: {data.rotation_period}</p>
          <p>Diameter: {data.diameter}</p>
          <p>Gravity: {data.gravity}</p>
        </div> }
      </div>
    );
};


export default PlanetDetails;
