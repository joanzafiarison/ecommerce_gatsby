import React , {useState, useContext} from 'react';
import GraphEx from './GraphExemple.js';
import {FaSearch} from 'react-icons/fa';
import { search_context } from "../services/context";

const SearchForm = () => {
  const [ search, setSearch ] = useState("");
  const ctx = useContext(search_context);
  console.log("ctx ",ctx)

  function submitSearch (e){
        e.preventDefault();
        console.log("search ",search)
  }
  return (
    <div id="searchElement">
        <form id="search" onSubmit={submitSearch}>
            <label>
                <input type="text" name="recherche" placeholder="Rechercher par nom..."id="recherche" onChange={(e) => setSearch(e.target.value)}/>
                <button className="search_button"><FaSearch /></button>
                <GraphEx search={`/${search}/`}/>
            </label>
        </form>
    </div>  
  )
}

export default SearchForm;