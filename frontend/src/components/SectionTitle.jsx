import React from 'react'
import { Link } from 'react-router-dom'

const SectionTitle = ({ title, nav_text, nav_link }) => {
  return (
    <>
        <div className="d-flex justify-content-between align-items-center my-2 ">
            <h3 className="mb-0 fw-bold">{title}</h3>
            <Link to={nav_link} className="btn btn-primary">{nav_text}<i className="fa-solid fa-arrow-right"></i></Link>
        </div>
    </>
  )
}

export default SectionTitle