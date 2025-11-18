import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container-fluid"> 
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 border-top px-4"> 
          <div className="col-md-4 d-flex align-items-center"> 
            <span className="mb-3 mb-md-0 text-body-secondary">&copy; {new Date().getFullYear()} Thejusphere</span> 
          </div> 
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"> 
            <li className="ms-3">
              <a className="text-body-secondary" href="#" aria-label="Instagram">
                <i className="fa-brands fa-square-instagram fa-2x"></i>
              </a>
            </li> 
            <li className="ms-3">
              <a className="text-body-secondary" href="#" aria-label="Facebook">
                <i className="fa-brands fa-square-facebook fa-2x"></i>
              </a>
            </li> 
            <li className="ms-3">
              <a className="text-body-secondary" href="#" aria-label="Facebook">
                <i className="fa-brands fa-square-x-twitter fa-2x"></i>
              </a>
            </li> 
          </ul> 
        </footer> 
      </div>
    </>
  )
}

export default Footer