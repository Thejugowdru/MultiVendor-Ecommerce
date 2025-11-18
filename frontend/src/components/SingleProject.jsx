import React from 'react'
import logo from '../assets/React-icon.png'
import { Link } from 'react-router-dom'

const SingleProject = ({title, price}) => {
  return (
    <>

        <div className="col-9 col-sm-6 col-md-3 mb-5 mx-auto">
            <div className="card shadow h-100">
                <Link className='text-decoration-none' to={'/project/djago-project-1/1'}>
                    <img src={logo} className="card-img-top img-thumbnail" alt="React Logo" />
                </Link>
                <div className="card-body border-top text-center">
                    <Link className='text-decoration-none text-primary' to={'/project/djago-project-1/1'}>
                        <h5 className="card-title mb-1">{title}</h5>
                    </Link>
                    
                    <p className="card-text">Price: Rs. {price}</p>
                </div>
                <div className="card-footer text-center">
                    <Link title="Add to cart" className="btn btn-success me-2"><i className="fa-solid fa-cart-plus"></i></Link>
                    <Link title="Add to wishlist" className="btn btn-danger me-2"><i className="fa-regular fa-heart"></i></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleProject