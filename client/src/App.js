
import './App.css';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch('/movies')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <h4>Movie list are comming soon!</h4>
    </div>
  );
}

export default App;
