import React, { useContext } from 'react';
import './course.css';
import { Container, Row, Col } from 'react-bootstrap';
import { RxDashboard } from "react-icons/rx";
import { IoIosList } from "react-icons/io";
import { ShopContext } from '../Context/ContextProvider';

const SortCourse = () => {
  const {isGridView, switchToGridView, switchToListView, handleFilterChange, filterOption} = useContext(ShopContext);
  return (
    <div className='sort-wrap'>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div className="sort-left-para">
              <p className='sort-para'>Showing  all 9 results</p>
            </div>
          </Col>
          <Col sm={12} md={6} >
            <div className="sort-right d-flex justify-content-center justify-content-md-end align-items-center">
              <div className="form-select-wrap">
                <form action="">
                  <select name="course-order" value={filterOption} onChange={(e) => handleFilterChange(e.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="priceHighToLow">Price High to Low</option>
                    <option value="priceLowToHigh">Price Low to High</option>
                    <option value="titleAZ">Course Title (a-z)</option>
                    <option value="titleZA">Course Title (z-a)</option>
                  </select>
                </form>
              </div>
              <div className={isGridView ? 'square-list grid-active' : 'square-list'} onClick={switchToGridView}>
                <RxDashboard />
              </div>
              <div className={isGridView ? 'square-list' : 'square-list grid-active'} onClick={switchToListView}>
                <IoIosList />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SortCourse;