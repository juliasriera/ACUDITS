
import React, { useEffect, useState } from 'react';

const App = () => {
    const [joke, setJoke] = useState([]);
    const [acudit, setAcudit]=useState([])
    

    const handleClick = () => setAcudit(joke)
         
 
    useEffect(() => {
        fetch('https://icanhazdadjoke.com/', {  
        headers: {

            accept: "application/json"
        },

    })
      .then(res => res.json()) 
      .then(data => setJoke(data.joke)); 
    }, []); 

    

    
    return (
      <div>
      <h1>ACUDITS</h1>
      <p>{acudit}</p>
    
    <button onClick= {handleClick}>Siguiente</button>
    </div>
    )
  }

export default App