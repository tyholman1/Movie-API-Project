import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

function Search(props){

const [searchData, setSearchData] = useState("")

    const handleChange = (e) =>{
        e.preventDefault()
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
            <input type="submit" value="Submit" />
            </form>
        </div>
    )

}

export default Search