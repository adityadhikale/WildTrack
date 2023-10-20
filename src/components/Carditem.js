// Import React and CSS for the Carditem component
import React from 'react';
import '../assets/styles/Carditem.css';

// Define the Carditem functional component that receives 'props' as its argument
const Carditem = (props) => {
    return (
        // Render a card element with dynamic content using 'props'
        <div className="card my-3" style={{ width: '18rem' }}>
            <div
                className="card-img"
                style={{
                    backgroundImage: `url(${props.song_image})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '250px',
                }}
            ></div>
            <div className="card-body">
                <h5 className="card-title" style={{fontWeight:'bolder'}}>{props.song_name}</h5> 
                <p className="card-text">
                    {props.artist_name} 
                </p>
            </div>
        </div>
    );
};

// Export the Carditem component as the default export
export default Carditem;
