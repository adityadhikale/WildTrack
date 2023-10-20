// Import necessary dependencies and styles
import React, { useState } from 'react';
import '../assets/styles/Latest.css';
import music from '../assets/images/music.jpeg';

// Define constant values for image sources
const placeholderImage = music;
const originalImage = 'https://source.unsplash.com/500x500/?music,song,dance,party';

// Define the Latest functional component
const Latest = () => {
    // Define state to manage the image source
    const [imageSource, setImageSource] = useState(placeholderImage);

    // Handle the image load event to switch to the original image
    const handleImageLoad = () => {
        setImageSource(originalImage);
    };

    // Handle the image error event (you can add error handling code here)
    const handleImageError = () => {
        // Add error handling logic if needed
    };

    // Render the Latest component
    return (
        <div className="latest-container">
            <div className="card latest-card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            id="latestImg"
                            src={imageSource}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            className="img-fluid rounded-start latest-image"
                            alt="Latest Music"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title latest-title">Listen to the Latest Song on <span style={{ color: '#DC1354', fontWeight: 'bolder' }}>W</span>ildTrack...</h2>
                            <p className="card-text latest-description">
                                Today's biggest hits... Listen Now!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export the Latest component as the default export
export default Latest;
