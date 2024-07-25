import React from 'react';
import './blog.css';
import { CiSearch } from "react-icons/ci";

const BlogSearch = ({searchQuery, setSearchQuery}) => {
  return (
    <div className='blog-search'>
        <form action="">
            <input type="text" 
            placeholder='Search here' 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button className='blog-search-btn'><CiSearch /></button>
        </form>
    </div>
  )
}

export default BlogSearch;