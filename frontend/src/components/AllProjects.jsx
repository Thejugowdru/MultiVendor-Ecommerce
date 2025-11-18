import React from 'react'
import SingleProject from './SingleProject'
import Pagination from './Pagination'

const AllProjects = () => {
  return (
    <div className='container'>
        {/* All Projects */}
        <h3 className="my-3">All projects</h3>

        <div className="row">
            <SingleProject title={"Django Project 1"} price={"200"} />
            <SingleProject title={"Django Project 2"} price={"180"} />
            <SingleProject title={"Django Project 3"} price={"210"} />
            <SingleProject title={"Django Project 4"} price={"200"} />
        </div>
        {/* End All Projects*/}

        <Pagination />
    </div>
  )
}

export default AllProjects