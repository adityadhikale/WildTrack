// Import necessary dependencies and assets
import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import search from '../assets/images/search.png';
import Latest from './Latest';
import Cardrow from './Cardrow';

// Define the Navbar functional component
const Navbar = (props) => {
    // Define state variables for search input and form submission
    const [searchInput, setSearchInput] = useState(''); // Set your default value here
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { setProgress } = props;

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchInput.trim() !== '') {
            setFormSubmitted(true);
            setProgress(0);
        }
    };

    // Handle keydown event for the input (e.g., backspace to clear formSubmitted)
    const handleInputKeyDown = (event) => {
        if (event.keyCode === 8) { // Backspace key
            setFormSubmitted(false);
        }
    };

    useEffect(() => {
        if (searchInput.trim() !== '' && formSubmitted) {
            // Handle search or any other action when the form is submitted
            // For example, you can make an API request here
            console.log('Search for: ' + searchInput);
        }
    }, [searchInput, formSubmitted]);

    // Render the Navbar component
    return (
        <>
            <nav className="navbar" data-bs-theme="dark" style={{ backgroundColor: 'black', borderRadius: '5px', margin: '14px 15px' }}>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <div>
                            <button className="navbar-brand" style={{ border: 'none', backgroundColor: 'transparent', padding: '0', cursor: 'pointer' }}>
                                <img src={logo} alt="WildTrack" style={{ width: '35px' }} />
                            </button>
                        </div>
                        <form className="d-flex flex-grow-1" onSubmit={handleSubmit}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Music, Artist and Podcasts"
                                aria-label="Search"
                                style={{ width: '100%', border: 'none', backgroundColor: 'rgb(21, 25, 25)', fontFamily: 'Quicksand' }}
                                value={searchInput}
                                onChange={(event) => { setSearchInput(event.target.value) }}
                                onKeyDown={handleInputKeyDown}
                            />
                            <button className="btn btn-outline-light" type="submit" style={{ border: 'none', backgroundColor: 'rgb(21, 25, 25)' }}>
                                <img src={search} alt="search" style={{ width: '30px' }} />
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <Latest />
            <Cardrow searchInput={formSubmitted ? searchInput : 'latest'} setProgress={setProgress} />
        </>
    );
};

// Export the Navbar component as the default export
export default Navbar;
