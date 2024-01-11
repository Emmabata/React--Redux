import './App.css'
import React, { useEffect, useState, useMemo } from 'react';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';



const App = () => {
  const fonts = useMemo(() => [
    'Arial',
    'Verdana',
    'Helvetica',
    'Georgia',
    'Times New Roman',
    'Courier New',
    'Impact',
    'Comic Sans MS'
  ],
  []);

  const [randomFont, setRandomFont] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * fonts.length);
    setRandomFont(fonts[randomIndex]);
  }, [fonts]);
  
  return (
    <div className='App' style={{ fontFamily: randomFont}}>
      <h1 style={{marginTop:"10px"}}>ToDo App</h1>
      <img src={require("../src/assets/globe.jpg")}
      alt="logo" 
      className='rotate-image'

      />
      <AddTask />
      <ListTask />  
    </div>
  );
};

export default App;
