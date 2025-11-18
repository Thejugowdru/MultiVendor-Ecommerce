import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CategoryProject from './components/CategoryProject';
import AllProjects from './components/AllProjects';
import AllCategories from './components/AllCategories';
import ProjectDetail from './components/ProjectDetail';
import CheckOut from './components/CheckOut';

function App() {

  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/categories' element={<AllCategories />} />
            <Route path='/category/:category_slug/:category_id' element={<CategoryProject />} />
            
            <Route path='/projects' element={<AllProjects />} />
            <Route path='/project/:project_slug/:project_id' element={<ProjectDetail />} />

            <Route path='/checkout' element={<CheckOut />} />
          </Routes>
        <Footer />
      </Router>
   
    </>
  )
}

export default App
