import React from 'react';

const SpeciesDetails = ({data}) => {
    
    return (
      <div className="media">
        <div className="media-left">
          <a href="javascript:void(0)">
            <img className="media-object" src="http://placehold.it/200x280" alt="Placehold" />
          </a>
        </div>
        { data && <div className="media-body">
          <p>Planet Name: {data.name}</p>
          <p>Average Height: {data.average_height}</p>
          <p>Designation: {data.designation}</p>
          <p>Skin Colors: {data.skin_colors}</p>
        </div> }
      </div>
    );
};


export default SpeciesDetails;
