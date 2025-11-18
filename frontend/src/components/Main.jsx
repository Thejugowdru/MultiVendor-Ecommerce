import React from 'react'
import LatestProjects from './LatestProjects'
import PopularCategories from './PopularCategories'
import PopularProjects from './PopularProjects'
import PopularSellers from './PopularSellers'
import RatingAndReviews from './RatingAndReviews'
import Footer from './Footer'

const Main = () => {
    return (
    <div className="container">
        <LatestProjects />
        <PopularCategories />
        <PopularProjects />
        <PopularSellers />
        <RatingAndReviews />
    </div>
  )
}

export default Main
