// Import necessary dependencies and components
import Navbar from "./components/Navbar";
import LoadingBar from 'react-top-loading-bar';
import React, { useState } from 'react';



// Define the main App component
function App() {

  // Define a state variable 'progress' and a function to update it using the 'useState' hook
  const [progress, setProgress] = useState(0)

  // Render the App component, including the LoadingBar and Navbar components
  return (
    <>
      {/* Display a loading progress bar */}
      <LoadingBar height={3} color="#DC1354" progress={progress} />

      {/* Render the navigation bar, passing the 'setProgress' function as a prop */}
      <Navbar setProgress={setProgress} />
    </>
  );
}

// Export the App component as the default export
export default App;
