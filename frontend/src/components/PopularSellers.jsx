import React from 'react'
import SectionTitle from './SectionTitle'
import SingleSeller from './SingleSeller'

const PopularSellers = () => {
  return (
    <>
        {/* Popular Sellers */}
        <SectionTitle title="Popular Sellers" nav_text="All Sellers" nav_link='/sellers' />

        <div className="row">
            <SingleSeller />
            <SingleSeller />
            <SingleSeller />
            <SingleSeller />
        </div>
        {/* End Popular Sellers*/}
    </>
  )
}

export default PopularSellers