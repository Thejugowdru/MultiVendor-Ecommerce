import React from 'react'
import logo from '../assets/React-icon.png'

const SingleSeller = () => {
  return (
    <>
        <div className="col-9 col-sm-6 col-md-3 mb-5 mx-auto">
            <div className="card h-100">
                <img src={logo} className="card-img-top img-thumbnail" alt="React Logo" />
                <div className="card-body border-top text-center">
                    <h5 className="card-title mb-1">Seller Name</h5>
                </div>
                <div className="card-footer text-center">
                    Categories: <a href="">Python</a>, <a href="">PHP</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleSeller