// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [pic, dog] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        dog(data.message);
      });
  }, []);

  if (!pic) return <p>Loading...</p>;

  return <img src={pic} alt="A Random Dog" />;
}

export default App;
