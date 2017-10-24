import React from 'react';

const StarshipsDetails = ({data}) => {
    console.log(data,'book')
    return (
      <div className="media">
        <div className="media-left">
          <a href="javascript:void(0)">
            <img className="media-object" src="http://placehold.it/200x280" alt="Placehold" />
          </a>
        </div>
        { data && <div className="media-body">
          <p>StarShip Name: {data.name}</p>
          <p>Crew: {data.crew}</p>
          <p>Cargo capacity: {data.cargo_capacity}</p>
          <p>Manufacturer: {data.manufacturer}</p>
        </div> }
      </div>
    );
};


export default StarshipsDetails;


