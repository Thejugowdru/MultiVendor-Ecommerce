import React from 'react'
import SectionTitle from './SectionTitle'
import SingleProject from './SingleProject'

const PopularProjects = () => {
  return (
    <>
        {/* Popular Projects */}
        <SectionTitle title="Popular Projects" nav_text="All Projects" nav_link='/projects' />


        <div className="row">
          <SingleProject title={"Django Project 1"} price={"200"} />
          <SingleProject title={"Django Project 2"} price={"180"} />
          <SingleProject title={"Django Project 3"} price={"210"} />
          <SingleProject title={"Django Project 4"} price={"200"} />
        </div>
        {/* End Popular Projects*/}
    </>
  )
}

export default PopularProjects