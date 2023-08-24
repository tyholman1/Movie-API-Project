import axios  from 'axios';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

function Search(props){

const [searchData, setSearchData] = useState("")
const [disney, setDisney] = useState([])

const getChar = async () => {
    try {
      const response = await axios.get(`https://api.disneyapi.dev/character?name=${searchData}`)
      const data = response.data
      setDisney(data.data[0] ? data.data[0] : data.data)
      // console.log(data.data[1].films)
    } catch (error) {
      console.error(error)
    }
  }

    const handleChange = (e) =>{
        // e.preventDefault()
        setSearchData(e.target.value)
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        props.disneySearch(searchData.searchTerm)
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="searchTerm"
                onChange={handleChange} 
                value={searchData} 
            />
            <input type="submit" value="Submit" onClick={getChar} />
            <img className='disney-photo' src={disney.imageUrl}/>
            <div>{disney.name}</div>
            </form>
        </div>
    )

}

export default Search