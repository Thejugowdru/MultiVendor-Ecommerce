import React from 'react'
import logo from '../assets/React-icon.png'
import { Link } from 'react-router-dom'

const SingleCategory = ({title, downloads}) => {
  return (
    <>
        <div className="col-9 col-sm-6 col-md-3 mb-5 mx-auto">
            <div className="card shadow h-100">
                <Link className='text-decoration-none text-primary' to={'/category/python/1'}>
                    <img src={logo} className="card-img-top img-thumbnail" alt="React Logo" />
                </Link>
                <div className="card-body border-top text-center">
                    <Link className='text-decoration-none text-primary' to={'/category/python/1'}>
                        <h5 className="card-title mb-1">{title} Projects</h5>
                    </Link>
                </div>
                <div className="card-footer text-center">
                    Project Downloads: {downloads}
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleCategory