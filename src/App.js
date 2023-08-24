import './App.css';
import { useState, useEffect } from 'react';
import axios  from 'axios';
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import Search from "./pages/Search";
// import Dashboard from "./pages/Dashboard"



function App() {
  const [search, setSearch] = useState([])
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const name = params.name
  
const getChar = async () => {
  try {
    const response = await axios.get(`https://api.disneyapi.dev/character?name=${name}`)
    const data = response.data
    setSearch(data.data[0])
    // console.log(data.data[1].films)
  } catch (error) {
    console.error(error)
  }
}

useEffect(() =>{
  getChar()
},[])
  
  return (
      <div className="App">
          <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Search" element={<Search disneySearch={getChar}/>} />
        {/* <Route path="/Dashboard" element={<Dashboard search = {search}/>} /> */}
      </Routes>
      </div>
    );
  }

export default App;
