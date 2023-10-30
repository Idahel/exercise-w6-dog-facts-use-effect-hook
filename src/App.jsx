import React, { useState, useEffect } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  const [dogFact, setDogFact] = useState(null);

  useEffect(() => {
    // Fetch a dog fact when the component mounts
    fetch("https://dogapi.dog/api/v2/facts")
      .then((res) => res.json())
      .then((json) => {
        // Set the first dog fact from the API response
        if (json.data && json.data.length > 0) {
          setDogFact(json.data[0].attributes.body);
        }
      });
  }, []);

  // Function to fetch a new dog fact
  const getNewDogFact = () => {
    fetch("https://dogapi.dog/api/v2/facts")
      .then((res) => res.json())
      .then((json) => {
        // Set a new dog fact from the API response
        if (json.data && json.data.length > 0) {
          setDogFact(json.data[0].attributes.body);
        }
      });
  };

  return (
    <div className="App">
      {/* Display the dog fact if available, otherwise show a loading message */}
      <DogFact body={dogFact} />

      {/* Button to fetch a new dog fact */}
      <button className = "dog-button" onClick={getNewDogFact}>Give me a dog fact</button>
    </div>
  );
};