import React, { useContext } from 'react';
import './course.css';
import '../Blogs/blog.css';
import { CiSearch } from "react-icons/ci";
import { ShopContext } from '../Context/ContextProvider';

const SearchCourse = () => {
  const {searchTerm, handleSearchChange} = useContext(ShopContext);
  return (
    <div className='course-search-wrap'>
        <CiSearch className='blog-search-btn' />
        <input type="text" 
        placeholder='Search' 
        className='search-inp'
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}/>
    </div>
  )
}

export default SearchCourse