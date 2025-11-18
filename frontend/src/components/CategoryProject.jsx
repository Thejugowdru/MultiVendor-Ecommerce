import React from 'react'
import SectionTitle from './SectionTitle'
import Pagination from './Pagination'
import SingleProject from './SingleProject'

const CategoryProject = () => {
  return (
    <div className='container'>
        {/* Latest Projects */}
        <h3 className='my-3'><span className="text-success fw-bolder">Python</span> Projects</h3>

        <div className="row">
          <SingleProject title={"Django Project 1"} price={"200"} />
          <SingleProject title={"Django Project 2"} price={"180"} />
          <SingleProject title={"Django Project 3"} price={"210"} />
          <SingleProject title={"Django Project 4"} price={"200"} />
        </div>
        {/* End Latest Projects */}

        <Pagination />
    </div>
  )
}

export default CategoryProject