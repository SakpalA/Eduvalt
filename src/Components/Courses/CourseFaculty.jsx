import React, { useContext } from 'react';
import './course.css';
import { ShopContext } from '../Context/ContextProvider';

const CourseFaculty = () => {
  const {
    handleCheckboxChange,
    selectedCategories,
    selectedDepartments,
    selectedLevel,
    getDepartmentCounts,
    getCategoryCounts,
    toggleFree,
    togglePaid, // Add togglePaid to access the function from context
    showFree,
    showPaid } = useContext(ShopContext);



  return (
    <div>
      <div className='blog-category-wrap'>
        <h3 className='blog-cat-title'>Faculties</h3>
        {['Business', '3D & Animation', 'Photography', 'Development', 'Health & Fitness', 'Marketing'].map(department => (
          <div key={department} className='checkbox-wrap'>
            <input
              type="checkbox"
              className='check-box'
              id={department}
              value={department}
              checked={selectedDepartments.includes(department)}
              onChange={() => handleCheckboxChange('department', department)}
            />
            <label htmlFor={department}>{department} ({getDepartmentCounts(department)})</label>
          </div>
        ))}
      </div>

      <div className='blog-category-wrap'>
        <h3 className='blog-cat-title'>Departmets</h3>
        {['Graphic Design', 'Health', 'Developer', 'Photography', 'Animation', 'Sales', 'Management', 'Education', 'Ui/Ux Designer'].map((category) => (
          <div key={category} className='checkbox-wrap'>
            <input
              type="checkbox"
              className='check-box'
              id={category}
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange('category', category)} />
            <label htmlFor={category}>{category} ({getCategoryCounts(category)})</label>
          </div>
        ))}
      </div>

      <div className='blog-category-wrap'>
        <h3 className='blog-cat-title'>Prices</h3>
        <div className='checkbox-wrap checkbox-fee'>
          <div className='d-flex align-items-center justify-content-start'>
            <input
              type="checkbox"
              className='check-box'
              id="free"
              checked={showFree}
              onChange={toggleFree} // Use toggleFree to toggle the state
            />
            <label htmlFor="free">Free</label>
          </div>
          <div className='d-flex align-items-center justify-content-start'>
            <input
              type="checkbox"
              className='check-box'
              id="paid"
              checked={showPaid}
              onChange={togglePaid} // Use togglePaid to toggle the state
            />
            <label htmlFor="paid">Paid</label>
          </div>
        </div>
      </div>

      <div className='blog-category-wrap'>
        <h3 className='blog-cat-title'>Levels</h3>
        {['All Levels', 'Beginner', 'Intermediate', 'Expert'].map((level) => (
          <div key={level} className='checkbox-wrap'>
            <input
              type="checkbox"
              className='check-box'
              id={level}
              value={level}
              checked={selectedLevel.includes(level)}
              onChange={() => handleCheckboxChange('level', level)} />
            <label htmlFor={level}>{level} </label>
          </div>
        ))}
      </div>

    </div>
  )
}

export default CourseFaculty;