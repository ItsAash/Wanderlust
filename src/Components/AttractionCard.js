import React from 'react';
import '../styles/AttractionCard.css';

function AttractionCard(props) {
  const venue = props.venue;
  return (
    <div className="Card">
      <div className="card__title">
        {venue.name}
      </div>
      <div className="card__icon">
        <img src={venue.categories[0].icon.prefix +'bg_64'+ venue.categories[0].icon.suffix} alt={venue.name} />
      </div>
      <div className="card__address">
        <span>Address:</span> <br /> <br />
        {venue.location.address} <br />
        {venue.location.city} <br />
        {venue.location.country} <br />
      </div>
    </div>
  )
}

export default AttractionCard

