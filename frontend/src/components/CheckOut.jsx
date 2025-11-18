import React from 'react'
import logo from '../assets/React-icon.png'
import { Link } from 'react-router-dom'

const CheckOut = () => {
  return (
    <>
        <div className="container">
             <h3 className="my-3">All Cart Items</h3>
             <div className="row">
                <div className="col-md-8 col-12">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <Link to={'/project/:project_slug/:project_id'} className='text-decoration-none'>
                                            <img src={logo} className="img-thumbnail" width='80' alt="React Logo" />
                                            &nbsp; Django
                                        </Link>
                                    </td>
                                    <td>Rs. 500</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <Link to={'/project/:project_slug/:project_id'} className='text-decoration-none'>
                                            <img src={logo} className="img-thumbnail" width='80' alt="React Logo" />
                                            &nbsp; REST
                                        </Link>
                                    </td>
                                    <td>Rs. 500</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <Link to={'/project/:project_slug/:project_id'} className='text-decoration-none'>
                                            <img src={logo} className="img-thumbnail" width='80' alt="React Logo" />
                                            &nbsp; Flask
                                        </Link>
                                    </td>
                                    <td>Rs. 500</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <Link to={'/project/:project_slug/:project_id'} className='text-decoration-none'>
                                            <img src={logo} className="img-thumbnail" width='80' alt="React Logo" />
                                            &nbsp; React
                                        </Link>
                                    </td>
                                    <td>Rs. 500</td>
                                </tr>
                            </tbody>

                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Total</th>
                                    <th>Rs. 2000</th>
                                </tr>
                                <tr>
                                    <th colSpan={3}>
                                        <Link>Continue Shopping</Link>
                                        <br />
                                        <Link>Proceed To Payment</Link>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
             </div>

        </div>
    </>
  )
}

export default CheckOut