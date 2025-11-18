import React from 'react'
import SectionTitle from './SectionTitle'
import SingleCategory from './SingleCategory'

const PopularCategories = () => {
  return (
    <>
        {/* Popular Categories */}
        <SectionTitle title="Popular Categories" nav_text="All Categories" nav_link='/categories' />
        
        <div className="row">
            <SingleCategory title={"Python"} downloads={235} />
            <SingleCategory title={"PHP"} downloads={211} />
            <SingleCategory title={"Java"} downloads={198} />
            <SingleCategory title={"JavaScript"} downloads={173} />
        </div>
        {/* End Popular Categories*/}
    </>
  )
}

export default PopularCategories