import React from 'react'
import logo from '../assets/React-icon.png'
import { Link } from 'react-router-dom'
import SingleProject from './SingleProject'

const ProjectDetail = () => {
  return (
    <div className="container-fluid my-3 ">
        <div className="row">
            <div className="col-sm-4 col-9 mx-auto">
              <div id="productImagesSlider" className="carousel carousel-dark slide carousel-fade shadow" data-bs-ride="true">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#productImagesSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#productImagesSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#productImagesSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={logo} className="img-thumbnail mb-5" alt="React Logo" />
                  </div>                  
                  <div className="carousel-item">
                    <img src={logo} className="img-thumbnail mb-5" alt="React Logo" />
                  </div>
                  <div className="carousel-item">
                    <img src={logo} className="img-thumbnail mb-5" alt="React Logo" />
                  </div>
                </div>

              </div>
              
            </div>
            <div className="col-sm-8 col-11 mx-auto">
              <h3>Product Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus, dolorem illum asperiores tempora facere. Aliquam dicta, quis eligendi non asperiores deleniti adipisci provident dolore a tempore.</p>
              <hr />

              <p className="fw-bold mb-2">
                Price: Rs. 
                <span className="text-muted text-decoration-line-through ms-1">300</span>
                <span className="text-danger ms-2 fw-bold">250</span>
              </p>

              <div className="row g-2 mb-2">
                <div className="col-lg-3 col-6 mx-auto">
                  <Link title="View Demo" target="_blank" className="btn btn-warning w-100"><i className="fa-solid fa-desktop"></i>&nbsp;Demo</Link>
                </div>   

                <div className="col-lg-3 col-6 mx-auto">
                  <button title="Buy Now" className="btn btn-primary w-100"><i className="fa-solid fa-bag-shopping"></i>&nbsp;Buy Now</button>
                </div>   

                <div className="col-lg-3 col-6">
                  <button title="Add to wishlist" className="btn btn-danger w-100"><i className="fa-regular fa-heart"></i>&nbsp;Add to Cart</button>
                </div>

                <div className="col-lg-3 col-6">
                  <button title="Add to cart" className="btn btn-success w-100"><i className="fa-solid fa-cart-plus"></i>&nbsp;Wishlist</button>
                </div>             
             
              </div>

              <div className="prouct-tags">
                <p>
                  <h4 className='f-flex flex-wrap mb-2'>Tags</h4>
                  <Link className='badge bg-secondary p-2 my-1 text-decoration-none'>Python</Link> &nbsp;
                  <Link className='badge bg-secondary p-2 my-1 text-decoration-none'>Django</Link> &nbsp;
                  <Link className='badge bg-secondary p-2 my-1 text-decoration-none'>Web Scripts</Link> &nbsp;     
                  <Link className='badge bg-secondary p-2 my-1 text-decoration-none'>Python</Link> &nbsp;
                  <Link className='badge bg-secondary p-2 my-1 text-decoration-none'>Django</Link> &nbsp;
                  <Link className='badge bg-secondary p-2 my-1 text-decoration-none'>Web Scripts</Link> &nbsp;
                  <Link className='badge bg-secondary p-2 my-1 text-decoration-none'>Python</Link> &nbsp;
                  <Link className='badge bg-secondary p-2 my-1 text-decoration-none'>Django</Link> &nbsp;
                  <Link className='badge bg-secondary p-2 my-1 text-decoration-none'>Web Scripts</Link> &nbsp;
                </p>                
              </div>

            </div>          
        </div>

        <h3 className='mt-5 mb-2'>Related Products</h3>
        <div id="relatedProductsSlider" className="carousel carousel-dark slide shadow" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <SingleProject title={"Django Project 5"} price={"200"} />
                <SingleProject title={"Django Project 6"} price={"180"} />
                <SingleProject title={"Django Project 7"} price={"210"} />
                <SingleProject title={"Django Project 8"} price={"200"} />
              </div>
            </div>            
            <div className="carousel-item">
              <div className="row">
                <SingleProject title={"Django Project 5"} price={"200"} />
                <SingleProject title={"Django Project 6"} price={"180"} />
                <SingleProject title={"Django Project 7"} price={"210"} />
                <SingleProject title={"Django Project 8"} price={"200"} />
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <SingleProject title={"Django Project 9"} price={"200"} />
                <SingleProject title={"Django Project 10"} price={"180"} />
                <SingleProject title={"Django Project 11"} price={"210"} />
                <SingleProject title={"Django Project 12  "} price={"200"} />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectDetail