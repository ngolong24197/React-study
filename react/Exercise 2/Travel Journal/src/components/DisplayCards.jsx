function DisplayCard({ place }) {
    return (
      <div className="card">
        <div className="card--image-container">
          <img src={place.imageUrl} alt={place.title} className="card--image" />
        </div>
        <div className="card--info">
          <h2>{place.title}</h2>
          <p className="card--location">
          <a
            href={place.googleMapsUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="card--location-link"
          >
            📍 {place.location}
          </a> 
           </p>
          <hr className="divider" />
          <div className="card--description">{place.description}</div>
        </div>
      </div>
    );
  }
  export default DisplayCard;
  