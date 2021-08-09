import "../styles.css"
import Home from './index';

import {useEffect, useState} from 'react';


// This default export is required in a new `pages/_app.js` file.
export default function MyApp() {
  
  const [connected, setConnected] = useState(false);
  
  useEffect((()=>{

    
    fetch("http://localhost:3001/conn")
    .then(res => res.text())
    .then(
      (result) => {
        setConnected(true);
      },
     
      (error) => {
        alert("Error connecting to the server");
      }
    )

  
    

  }), []);

  return (

    <div>
      {!connected ? <h1>Connecting to server</h1> : <Home/>}
    </div>
    
  );
}