import React, {useContext} from 'react';
import Icons from '../Icons/Icons';
import { FaSearch } from 'react-icons/fa';
import { GlobalContext } from '../../Context/CartContext';
import './styleSearch.css';

const Search = () => {
    const {search, setSearch} = useContext (GlobalContext);
    
    const handleChange = (e) => {
    setSearch(e.target.value);
    // console.log (e.target.value);
  }

  return (
    <>
      {/* <div className='search-box'>
        <button className='btn-search'>
          <Icons Icon={FaSearch}/>
        </button>
        <input value={search} onChange={handleChange} type="text" className='input-search' placeholder="Buscar" />
      </div> */}
      {/* <div className='icons'>
        <div id="search-btn"><Icons Icon={FaSearch}/></div>
      </div> */}
      <form action="" className="search-form">
        <input value={search} onChange={handleChange} type="search" id="search-box" placeholder="¿Qué estás buscando?" />
        <label for="search-box"><Icons Icon={FaSearch}/></label>
      </form>
      
    </>
  )
}

export default Search