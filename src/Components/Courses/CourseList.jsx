import React, { useContext } from 'react';
import { ShopContext } from '../Context/ContextProvider';
import GridView from './GridView';
import ListView from './ListView';
import CoursePagination from './CoursePagination';

const CourseList = () => {
    const {isGridView} = useContext(ShopContext)
  return (
    <>
        {isGridView ? <GridView /> : <ListView />}
        <CoursePagination />
    </>
  )
}

export default CourseList;