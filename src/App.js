import './App.css';
import { useState, useEffect } from 'react';
import axios  from 'axios';

function App() {

  const [disneyChar, setDisneyChar ] = useState([])

  const getMovie = async () => {
    try {
      const response = await axios.get("https://api.disneyapi.dev/character?name=Mickey%20Mouse")
      const data = response.data
      setDisneyChar(data.data[1].films)
      // console.log(data.data[1].films)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() =>{
    getMovie()
  },[])
  
  return (
      <div className="App">
        <h1>{getMovie}</h1>
      </div>
    );
  }

export default App;
