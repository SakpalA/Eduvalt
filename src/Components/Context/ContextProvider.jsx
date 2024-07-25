import React, { useState, createContext, useEffect } from 'react';
import all_courses from '../Assets/all_courses';


export const ShopContext = createContext();


const ContextProvider = ({ children }) => {

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [showFree, setShowFree] = useState(false); 
  const [showPaid, setShowPaid] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [filterOption, setFilterOption] = useState('newest');
  const [courses, setCourses] = useState(all_courses);
  
  // Course Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  // Search
  const [searchTerm, setSearchTerm] = useState("");
  

  const handleCheckboxChange = (type, value) => {
    switch (type) {
      case 'category':
        setSelectedCategories(prevSelectedCategories =>
          prevSelectedCategories.includes(value)
            ? prevSelectedCategories.filter(cat => cat !== value)
            : [...prevSelectedCategories, value]
        );
        break;
      case 'department':
        setSelectedDepartments(prevSelectedDepartments =>
          prevSelectedDepartments.includes(value)
            ? prevSelectedDepartments.filter(dep => dep !== value)
            : [...prevSelectedDepartments, value]
        );
        break;
      case 'level':
        setSelectedLevel(prevSelectedLevel =>
          prevSelectedLevel.includes(value)
            ? prevSelectedLevel.filter(lev => lev !== value)
            : [...prevSelectedLevel, value]
        );
        break;
      default:
        break;
    }
  };

  const applySorting = (items, option) => {
    switch (option) {
      case 'newest':
        return items.slice().sort((a, b) => b.date - a.date);
      case 'oldest':
        return items.slice().sort((a, b) => a.date - b.date);
      case 'priceHighToLow':
        return items.filter(course =>  course.fees !== 'free') // Filter out free courses
        .slice()
        .sort((a, b) => {
          // Parse fees and compare
          const feeA = parseFloat(a.fees.replace(/\D/g, '') || 0); // Replace non-numeric characters, handle empty or non-existent fees
          const feeB = parseFloat(b.fees.replace(/\D/g, '') || 0);
          return feeB - feeA; // Sort from high to low
        });
      case 'priceLowToHigh':
        return items.filter(course => course.fees !== 'free') // Filter out free courses
        .slice()
        .sort((a, b) => {
          // Parse fees and compare
          const feeA = parseFloat(a.fees.replace(/\D/g, '') || 0); // Replace non-numeric characters, handle empty or non-existent fees
          const feeB = parseFloat(b.fees.replace(/\D/g, '') || 0);
          return feeA - feeB; // Sort from low to high
        });
        // The replace(/\D/g, '') method is used to remove non-numeric characters from the fees strings before parsing them into float. This ensures proper sorting based on fees.
      case 'titleAZ':
        return items.slice().sort((a, b) => a.title.localeCompare(b.title));
      case 'titleZA':
        return items.slice().sort((a, b) => b.title.localeCompare(a.title));
      default:
        return items;
    }
  };

  // Function to handle filter option change
  const handleFilterChange = (option) => {
    setFilterOption(option);
};


// serach
const handleSearchChange = (query) => {
  setSearchTerm(query);
};

useEffect(() => {
  const filteredProducts = all_courses.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const departmentMatch = selectedDepartments.length === 0 || selectedDepartments.includes(product.department);
    const levelMatch = selectedLevel.length === 0 || selectedLevel.includes(product.level);
    const feeMatch = (!showFree && !showPaid) || (showFree && product.fees === 'Free') || (showPaid && product.fees !== 'Free');
    // console.log('Filtering:', product.title, 'Category Match:', categoryMatch, 'Department Match:', departmentMatch, 'Level Match:', levelMatch, 'Fee Match:', feeMatch);
    const searchMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && departmentMatch && levelMatch && feeMatch && searchMatch;
  });

  // console.log('Filtered Products:', filteredProducts);

  // Apply sorting to filtered products
  const sortedProducts = applySorting(filteredProducts, filterOption);

  // Update courses state with sorted products
  setCourses(sortedProducts);
}, [selectedCategories, selectedDepartments, selectedLevel, showFree, showPaid, filterOption, searchTerm]);


  const getDepartmentCounts = (department) => {
    return courses.filter(product => product.department === department).length;
  };

  const getCategoryCounts = (category) => {
    return courses.filter(product => product.category === category).length;
  }

  const toggleFree = () => setShowFree(!showFree); // Toggle function for free courses checkbox
  const togglePaid = () => setShowPaid(!showPaid);

  const switchToGridView = () => {
    setIsGridView(true);
  }

  const switchToListView = () => {
    setIsGridView(false);
  }


  // Course Pagination 
  const nextPage = () => {
    if(currentPage < Math.ceil(courses.length / coursesPerPage)){
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };




  const contextValue = {
    filteredProducts: courses.slice((currentPage -1) * coursesPerPage, currentPage * coursesPerPage),
    selectedCategories,
    selectedDepartments,
    selectedLevel,
    getDepartmentCounts,
    getCategoryCounts,
    handleCheckboxChange,
    switchToGridView,
    switchToListView,
    isGridView,
    handleFilterChange,
    filterOption,
    toggleFree,
    togglePaid, 
    showFree,
    showPaid,
    currentPage,
    totalPages : Math.ceil(courses.length / coursesPerPage),
    prevPage,
    nextPage,
    searchTerm,
    handleSearchChange
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  )
}

export default ContextProvider;