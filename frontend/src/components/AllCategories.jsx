import React from 'react'
import SingleCategory from './SingleCategory'
import Pagination from './Pagination'

const AllCategories = () => {
  return (
    <div className='container'>
      {/* All Categories */}
      <h3 className="my-3">All categories</h3>

      <div className="row">
        <SingleCategory title={"Python"} downloads={235} />
        <SingleCategory title={"PHP"} downloads={211} />
        <SingleCategory title={"Java"} downloads={198} />
        <SingleCategory title={"JavaScript"} downloads={173} />
      </div>
      {/* End All Categories*/}

      <Pagination />
    </div>
  )
}

export default AllCategories