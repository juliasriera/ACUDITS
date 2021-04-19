
import React, { useEffect, useState } from 'react';

const App = () => {
    const [joke, setJoke] = useState(null);
 
    useEffect(() => {
      fetch('https://icanhazdadjoke.com/', {  
        headers: {

            accept: "application/json"
        },

    })
      .then(res => res.json()) 
      .then(data => setJoke(data.joke)); 
    }, []); 

    
//<button onClick={() => {alert("Hello!")}}>Siguiente</button>
    
    return (
      <div>
      <h1>ACUDITS</h1>
    
    <button onClick={() => {alert({"Hello!"})}}>Siguiente</button>
    </div>
    )
  }

export default App