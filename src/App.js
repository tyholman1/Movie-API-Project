import './App.css';
import { useState, useEffect } from 'react';
import axios  from 'axios';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Dashboard from "./pages/Dashboard"


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
          <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Search/:name" element={<Search />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      </div>
    );
  }

export default App;
